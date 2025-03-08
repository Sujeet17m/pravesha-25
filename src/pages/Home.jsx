
import React from 'react';
import Hero from '@/components/Hero';
import EventsSection from '@/components/EventsSection';
import CoordinatorsSection from '@/components/CoordinatorsSection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-symposium-gradient text-white">
      <div className="max-w-7xl mx-auto">
        <Hero />
        <EventsSection />
        <CoordinatorsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
