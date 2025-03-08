
import React from 'react';
import { coordinators } from '@/data/events';

const CoordinatorsSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold text-white mb-8">Event Coordinators</h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {coordinators.map((coordinator, index) => (
          <div 
            key={index} 
            className="bg-symposium-card backdrop-blur-sm p-6 rounded-lg max-w-xs mx-auto md:mx-0"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{coordinator.title}</h3>
            <p className="text-gray-200">{coordinator.name} - <span className="text-blue-300">{coordinator.phone}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoordinatorsSection;
