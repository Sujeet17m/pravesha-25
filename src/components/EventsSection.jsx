
import React, { useState } from 'react';
import EventCard from './EventCard';
import EventDetailModal from './EventDetailModal';
import { technicalEvents, nonTechnicalEvents } from '@/data/events';

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-symposium-card backdrop-blur-sm p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Technical Events</h2>
          <div className="space-y-2">
            {technicalEvents.map((event) => (
              <EventCard 
                key={event.id} 
                event={event} 
                onClick={handleEventClick} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-symposium-card backdrop-blur-sm p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Non-Technical Events</h2>
          <div className="space-y-2">
            {nonTechnicalEvents.map((event) => (
              <EventCard 
                key={event.id} 
                event={event} 
                onClick={handleEventClick} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <EventDetailModal 
        event={selectedEvent} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default EventsSection;
