
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const teamMembers = [
  { name: 'John Doe', role: 'Founder & Lead Designer', imageUrl: 'https://img.freepik.com/free-photo/young-handsome-cheerful-gardener-smiling-taking-care-flowers_176420-3796.jpg?semt=ais_hybrid&w=740&q=80' },
  { name: 'Jane Smith', role: 'Horticulturist', imageUrl: 'https://img.freepik.com/free-photo/smiling-afro-gardener-using-hedge-trimmer-cutting-bushes_651396-1479.jpg?semt=ais_hybrid&w=740&q=80' },
  { name: 'Mike Johnson', role: 'Hardscape Foreman', imageUrl: 'https://www.nannybutler.com/wp-content/uploads/2021/01/gardener.jpg' },
];

const TeamMemberCard: React.FC<{ member: typeof teamMembers[0] }> = ({ member }) => {
  const { ref, animationClasses } = useScrollAnimation({ threshold: 0.3 });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center transition-all duration-700 ${animationClasses}`}>
      <img src={member.imageUrl} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg" />
      <h3 className="text-xl font-bold text-brand-green">{member.name}</h3>
      <p className="text-brand-brown">{member.role}</p>
    </div>
  );
}

const About: React.FC = () => {
    const { ref: textRef, animationClasses: textAnimation } = useScrollAnimation({ threshold: 0.2 });
    const { ref: teamRef, animationClasses: teamAnimation } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-brand-neutral-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green">About LushScapes</h2>
        </div>
        <div ref={textRef as React.RefObject<HTMLDivElement>} className={`max-w-4xl mx-auto text-center text-gray-700 text-lg leading-relaxed mb-16 transition-all duration-700 ${textAnimation}`}>
          <p className="mb-4">
            Founded in 2010, LushScapes was born from a passion for nature and a commitment to creating extraordinary outdoor living spaces. We believe that a well-designed landscape is more than just plants and stones; it's an extension of your home, a place for relaxation, entertainment, and connection with the natural world.
          </p>
          <p>
            Our team of dedicated professionals combines artistic vision with horticultural expertise and quality craftsmanship to deliver landscapes that are not only beautiful but also sustainable and built to last.
          </p>
        </div>
        <div ref={teamRef as React.RefObject<HTMLDivElement>} className={`text-center mb-12 transition-all duration-700 ${teamAnimation}`}>
          <h3 className="text-3xl font-bold text-brand-green">Meet Our Team</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map(member => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
