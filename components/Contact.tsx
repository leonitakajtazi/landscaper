import React, { useState, useRef, useEffect, useCallback } from 'react';

// --- Icon Imports (Inline SVG fallback since lucide-react isn't available) ---
const MailIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const CheckCircleIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
// MapPinIcon and PhoneIcon are no longer needed, but kept here for completeness if required elsewhere.
const MapPinIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const PhoneIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.71-2.92 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2H7v4l-1 2 2 2 4 4 2 2 2-1 4 0z"></path></svg>
);

// --- Custom Hook Implementation (formerly in '../hooks/useScrollAnimation') ---

/**
 * Custom hook to apply animation classes based on element visibility in the viewport.
 * Uses IntersectionObserver for efficient detection.
 */
const useScrollAnimation = ({ threshold = 0.1, defaultAnimation = 'opacity-0 translate-y-10' }) => {
    const [animationClasses, setAnimationClasses] = useState(defaultAnimation);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the element is intersecting (visible), set the final animation class
                if (entry.isIntersecting) {
                    setAnimationClasses('opacity-100 translate-y-0');
                    // Stop observing once it has appeared
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, [ref, threshold]);

    // Combine transition utility with current animation state
    return { ref, animationClasses: `transition-all duration-700 ease-out ${animationClasses}` };
};

// --- Custom Notification Component (replaces alert()) ---

const SuccessNotification = ({ isVisible, onClose }) => {
    // Hide the notification automatically after 5 seconds
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => onClose(), 5000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <div className={`fixed top-4 right-4 z-50 transition-all duration-500 transform
            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
            <div className="flex items-center bg-emerald-600 text-white text-sm font-bold px-4 py-3 rounded-lg shadow-xl" role="alert">
                <CheckCircleIcon className="w-5 h-5 mr-3" />
                <p>Thank you! Your message has been sent successfully.</p>
                <button
                    onClick={onClose}
                    className="ml-4 -mr-1 p-1 rounded-full hover:bg-emerald-700 transition-colors"
                    aria-label="Close notification"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    );
};

// --- Main App Component ---

const App = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Apply scroll animations only for the form
    const { ref: formRef, animationClasses: formAnimation } = useScrollAnimation({ threshold: 0.2 });
    // infoRef is removed as the corresponding section is deleted.

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Use useCallback to memoize the onClose handler for the notification
    const handleCloseNotification = useCallback(() => setIsSubmitted(false), []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // 1. Simulate form submission delay (replace with actual fetch/API call)
        // console.log('Submitting form data:', formData);

        // 2. Show success notification
        setIsSubmitted(true);

        // 3. Clear form
        setFormData({ name: '', email: '', message: '' });
    };

    // Klasat 'bg-white' janë aplikuar tashmë në inpute dhe textarea, por ne shtojmë bg-white në formë
    // dhe heqim bg-gray-50 nga div-i më i madh për të unifikuar sfondin.

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            {/* Header/Banner can go here if needed for full app */}

            <section id="contact" className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"> {/* Reduced max-width for better centering of a single column */}
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold uppercase text-emerald-500 tracking-wider">Contact Us</p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mt-2">
                            Ready to Grow Your Landscape?
                        </h2>
                        <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
                            Send us a message to schedule a consultation and receive a free quote for your project.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-center">

                        {/* Contact Form - Now full width on large screens */}
                        <div ref={formRef} className={`w-full lg:w-full transition-all duration-700 ${formAnimation}`}>
                            {/* Këtu e mbajmë bg-white për të siguruar që formulari të jetë i bardhë */}
                            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <MailIcon className="w-6 h-6 mr-2 text-emerald-600" />
                                    Send Us a Quick Message
                                </h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            // Këto klasa sigurojnë që inputi të ketë sfond të bardhë (bg-white) dhe bordura për ta dalluar
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150 bg-white"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            // Siguruar që ka bg-white
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150 bg-white"
                                            placeholder="john.doe@example.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            // Siguruar që ka bg-white
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150 resize-none bg-white"
                                            placeholder="Tell us about your landscaping needs, project size, and timeline..."
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center bg-emerald-600 text-white font-semibold py-3 px-4 rounded-full hover:bg-emerald-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50"
                                    >
                                        <MailIcon className="w-5 h-5 mr-2" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* The Map and Info Card section was removed here */}
                        
                    </div>
                </div>
            </section>

            {/* Notification Component */}
            <SuccessNotification isVisible={isSubmitted} onClose={handleCloseNotification} />
        </div>
    );
};

export default App;
