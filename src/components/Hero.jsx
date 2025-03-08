
import React from 'react';
import { Calendar, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <div className="text-center py-16 px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-white font-display mb-2">
        Pravesha'25
      </h1>
      <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
        <Calendar className="h-5 w-5" />
        <span className="text-lg">March 27, 2025</span>
      </div>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-white/90 mx-auto w-fit hover:text-white transition-colors"
      >
        <Instagram className="h-5 w-5" />
        <span>Follow us on Instagram</span>
      </a>
    </div>
  );
};

export default Hero;
