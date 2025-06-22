'use client';

import ScrollVelocity from './ScrollVelocity';
import { FaUtensils, FaCoffee, FaGraduationCap, FaBuilding, FaHeart, FaLandmark, FaUsersCog, FaTools } from 'react-icons/fa';

export default function About() {
  const industries = [
    { name: 'Restaurants', icon: <FaUtensils className="text-2xl text-primary" /> },
    { name: 'Coffee', icon: <FaCoffee className="text-2xl text-primary" /> },
    { name: 'Education', icon: <FaGraduationCap className="text-2xl text-primary" /> },
    { name: 'Corporate Offices', icon: <FaBuilding className="text-2xl text-primary" /> },
    { name: 'Healthcare Services', icon: <FaHeart className="text-2xl text-primary" /> },
    { name: 'Government', icon: <FaLandmark className="text-2xl text-primary" /> },
    { name: 'Public Sector', icon: <FaUsersCog className="text-2xl text-primary" /> },
    { name: 'Construction & Site Operations', icon: <FaTools className="text-2xl text-primary" /> },
    { name: 'Restaurants', icon: <FaUtensils className="text-2xl text-primary" /> },
    { name: 'Coffee', icon: <FaCoffee className="text-2xl text-primary" /> },
    { name: 'Education', icon: <FaGraduationCap className="text-2xl text-primary" /> },
    { name: 'Corporate Offices', icon: <FaBuilding className="text-2xl text-primary" /> },
    { name: 'Healthcare Services', icon: <FaHeart className="text-2xl text-primary" /> },
    { name: 'Government', icon: <FaLandmark className="text-2xl text-primary" /> },
    { name: 'Public Sector', icon: <FaUsersCog className="text-2xl text-primary" /> },
    { name: 'Construction & Site Operations', icon: <FaTools className="text-2xl text-primary" /> },
  ];

  const cards = industries.map((industry, index) => (
    <div
      key={`${industry.name}-${index}`} // Unique key using name and index
      className="flex items-center gap-3 min-w-[200px] max-w-[250px]"
    >
      <div
        className="bg-white px-3 py-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center w-12 h-12 hover:shadow-md transition-all duration-10"
      >
        {industry.icon}
      </div>
      <span className="text-sm font-medium text-gray-900 whitespace-nowrap">{industry.name}</span>
    </div>
  ));

  return (
    <>
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        html {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
      `}</style>
      <section id="about" className="py-10 pt-16 bg-gradient-to-b from-white to-[#f9fafb]">
        <div className="container mx-auto px-4 relative">
          {cards.length > 0 && (
            <ScrollVelocity
              texts={[cards]}
              velocity={-80}
              className="flex gap-16"
              numCopies={10}
              parallaxStyle={{ margin: '0', overflow: 'hidden' }}
              scrollerStyle={{ display: 'flex', alignItems: 'center', gap: '4rem', width: 'fit-content' }}
            />
          )}
        </div>
      </section>
    </>
  );
}