
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Sarah & Tom P.',
    quote: "LushScapes completely transformed our backyard! The team was professional, creative, and the final result exceeded all our expectations. It's our new favorite 'room' in the house!",
    rating: 5,
    imageUrl: 'https://picsum.photos/100/100?image=219'
  },
  {
    name: 'David L.',
    quote: "The attention to detail on our new stone patio is incredible. The craftsmanship is top-notch. I highly recommend them for any hardscaping project.",
    rating: 5,
    imageUrl: 'https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg'
  },
  {
    name: 'Maria G.',
    quote: "My garden has never looked better. Their design team chose the perfect plants that are both beautiful and low-maintenance. A wonderful experience from start to finish.",
    rating: 5,
    imageUrl: 'https://picsum.photos/100/100?image=326'
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex justify-center text-amber-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.168c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.959c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.959a1 1 0 00-.364-1.118L2.053 9.386c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => {
    const { ref, animationClasses } = useScrollAnimation({ threshold: 0.3 });

    return (
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`bg-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-700 ease-out-expo hover:shadow-2xl hover:scale-105 ${animationClasses}`}>
            <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto -mt-16 mb-4 border-4 border-white shadow-md object-cover" />
            <StarRating rating={testimonial.rating} />
            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
            <p className="font-bold text-brand-green">{testimonial.name}</p>
        </div>
    );
};


const Testimonials: React.FC = () => {
    const { ref, animationClasses } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section id="testimonials" className="py-20 bg-brand-neutral-light">
      <div className="container mx-auto px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-20 transition-all duration-700 ${animationClasses}`}>
          <h2 className="text-4xl font-bold text-brand-green">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We are proud of the relationships we've built and the spaces we've created.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
