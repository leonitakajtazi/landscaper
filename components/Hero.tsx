
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: `url('https://www.houselogic.com/wp-content/uploads/2010/03/landscape-curb-appeal-retina_retina_f09021ca6edac80b70f3a5b5092c4059.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down font-serif">
          Transforming Outdoor Spaces Into Masterpieces
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-brand-neutral animate-fade-in-up">
          We design, build, and maintain beautiful, functional landscapes that enhance your life and property value.
        </p>
        <a
          href="#contact"
          className="bg-brand-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-green-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in-up"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
