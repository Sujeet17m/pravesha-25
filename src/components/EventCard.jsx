
import React from 'react';
import { cn } from '@/lib/utils';

const EventCard = ({ event, onClick }) => {
  const Icon = event.icon;
  
  return (
    <div 
      className="event-card mb-4"
      onClick={() => onClick(event)}
    >
      <div className="flex items-start gap-3">
        <div className="text-white p-1">
          <Icon className="h-6 w-6" />
        </div>
        <div className="text-left">
          <h3 className="text-white font-bold">{event.title}</h3>
          <p className="text-gray-200 text-sm mt-1">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
