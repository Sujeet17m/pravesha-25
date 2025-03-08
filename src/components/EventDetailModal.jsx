
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from 'lucide-react';

const EventDetailModal = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  const Icon = event.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Icon className="h-6 w-6 text-symposium-purple-light" />
            <DialogTitle>{event.title}</DialogTitle>
          </div>
          <DialogDescription>
            {event.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex gap-2 items-center text-sm">
            <MapPin className="h-4 w-4 text-symposium-purple-light" />
            <span>{event.venue}</span>
          </div>
          
          <div className="flex gap-2 items-center text-sm">
            <Clock className="h-4 w-4 text-symposium-purple-light" />
            <span>{event.time}</span>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Rules & Regulations</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailModal;
