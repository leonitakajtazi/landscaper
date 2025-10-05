
import React from 'react';
import LawnMowerIcon from './icons/LawnMowerIcon';
import SproutIcon from './icons/SproutIcon';
import BrickIcon from './icons/BrickIcon';
import SprinklerIcon from './icons/SprinklerIcon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const { ref, animationClasses } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-700 ease-out-expo hover:-translate-y-2 hover:shadow-2xl ${animationClasses}`}
    >
      <div className="inline-block bg-brand-green-light p-4 rounded-full mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-brand-green mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const { ref, animationClasses } = useScrollAnimation({ threshold: 0.1 });
  
  const servicesData = [
    {
      icon: <LawnMowerIcon className="w-8 h-8" />,
      title: 'Lawn Care',
      description: 'Expert mowing, fertilization, and weed control for a lush, green lawn year-round.',
    },
    {
      icon: <SproutIcon className="w-8 h-8" />,
      title: 'Garden Design',
      description: 'Creative and sustainable garden designs that reflect your personal style and thrive in our climate.',
    },
    {
      icon: <BrickIcon className="w-8 h-8" />,
      title: 'Hardscaping',
      description: 'Beautiful and durable patios, walkways, retaining walls, and outdoor living areas.',
    },
    {
      icon: <SprinklerIcon className="w-8 h-8" />,
      title: 'Irrigation',
      description: 'Efficient irrigation system installation and maintenance to keep your landscape healthy.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-brand-neutral-light">
      <div className="container mx-auto px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-12 transition-all duration-700 ${animationClasses}`}>
          <h2 className="text-4xl font-bold text-brand-green">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            From concept to completion, we offer a full range of landscaping services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
