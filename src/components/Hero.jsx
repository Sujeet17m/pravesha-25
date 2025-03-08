
import React from 'react';
import { Calendar, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <div className="container px-4 mx-auto py-16 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Pravesha'25</h1>
      
      <div className="flex items-center justify-center gap-2 text-white mb-4">
        <Calendar className="h-5 w-5" />
        <span>March 27, 2025</span>
      </div>
      
      <div className="flex items-center justify-center gap-2 text-white mb-8">
        <Instagram className="h-5 w-5" />
        <span>Follow us on Instagram</span>
      </div>
    </div>
  );
};

export default Hero;
