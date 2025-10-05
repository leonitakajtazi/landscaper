
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const portfolioItems = [
  { id: 1, title: 'Modern Zen Garden', category: 'Garden Design', imageUrl: 'https://images.finegardening.com/app/uploads/2021/06/09122815/1_aIMG_7045.jpeg' },
  { id: 2, title: 'Stone Patio & Fire Pit', category: 'Hardscaping', imageUrl: 'https://www.houselogic.com/wp-content/uploads/2010/03/landscape-curb-appeal-retina_retina_f09021ca6edac80b70f3a5b5092c4059.jpg' },
  { id: 3, title: 'Lakeside Lawn', category: 'Lawn Care', imageUrl: 'https://st.hzcdn.com/simgs/pictures/landscapes/zero-lawn-xeriscape-david-morello-garden-enterprises-inc-img~5e5140b8032b0034_14-4188-1-8bf8ae1.jpg' },
  { id: 4, title: 'Native Plant Oasis', category: 'Garden Design', imageUrl: 'https://cms.interiorcompany.com/wp-content/uploads/2024/03/fill-flowers-front-garden-landscaping-ideas.jpg' },
  { id: 5, title: 'Automated Sprinkler System', category: 'Irrigation', imageUrl: 'https://www.missouribotanicalgarden.org/Portals/0/Gardening/Gardening%20Help/images/Plants/garden_design0004.jpg' },
  { id: 6, title: 'Backyard Entertainment Area', category: 'Hardscaping', imageUrl: 'https://cdn.prod.website-files.com/6436b5b1440e7f4d73490fe0/670f818075d45d4611ec97d4_646736d64bb53c2cdc8f2ce8_6-Simple-Landscaping-Ideas-for-Your-Front-Yard.webp' },
];

const PortfolioItem: React.FC<{ item: typeof portfolioItems[0] }> = ({ item }) => {
  const { ref, animationClasses } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 ${animationClasses}`}>
      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/60"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500 ease-out-expo">
        <h3 className="text-2xl font-bold">{item.title}</h3>
        <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">{item.category}</p>
      </div>
    </div>
  );
};


const Portfolio: React.FC = () => {
  const { ref, animationClasses } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-12 transition-all duration-700 ${animationClasses}`}>
          <h2 className="text-4xl font-bold text-brand-green">Our Work</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Take a look at some of our proudest transformations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(item => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
