
// import React from 'react';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { MapPin, Clock } from 'lucide-react';

// const EventDetailModal = ({ event, isOpen, onClose }) => {
//   if (!event) return null;

//   const Icon = event.icon;

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <div className="flex items-center gap-2 mb-2">
//             <Icon className="h-6 w-6 text-symposium-purple-light" />
//             <DialogTitle>{event.title}</DialogTitle>
//           </div>
//           <DialogDescription>
//             {event.description}
//           </DialogDescription>
//         </DialogHeader>
        
//         <div className="space-y-4">
//           <div className="flex gap-2 items-center text-sm">
//             <MapPin className="h-4 w-4 text-symposium-purple-light" />
//             <span>{event.venue}</span>
//           </div>
          
//           <div className="flex gap-2 items-center text-sm">
//             <Clock className="h-4 w-4 text-symposium-purple-light" />
//             <span>{event.time}</span>
//           </div>
          
//           <div className="space-y-2">
//             <h4 className="font-medium">Rules & Regulations</h4>
//             <ul className="list-disc pl-5 space-y-1 text-sm">
//               {event.rules.map((rule, index) => (
//                 <li key={index}>{rule}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
        
//         <DialogFooter className="sm:justify-end">
//           <DialogClose asChild>
//             <Button type="button" variant="secondary">
//               Close
//             </Button>
//           </DialogClose>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EventDetailModal;

// import React from 'react';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { MapPin, Clock } from 'lucide-react';

// const EventDetailModal = ({ event, isOpen, onClose }) => {
//   if (!event) return null;

//   const Icon = event.icon;

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <div className="flex items-center gap-2 mb-2">
//             <Icon className="h-6 w-6 text-symposium-purple-light" />
//             <DialogTitle>{event.title}</DialogTitle>
//           </div>
//           <DialogDescription>
//             {event.description}
//           </DialogDescription>
//         </DialogHeader>
        
//         <div className="space-y-4">
//           <div className="flex gap-2 items-center text-sm">
//             <MapPin className="h-4 w-4 text-symposium-purple-light" />
//             <span>{event.venue}</span>
//           </div>
          
//           <div className="flex gap-2 items-center text-sm">
//             <Clock className="h-4 w-4 text-symposium-purple-light" />
//             <span>{event.time}</span>
//           </div>
          
//           <div className="space-y-2">
//             <h4 className="font-medium">Rules & Regulations</h4>
//             <ul className="list-disc pl-5 space-y-1 text-sm">
//               {event.rules.map((rule, index) => (
//                 <li key={index}>{rule}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <DialogFooter className="sm:justify-end">
//           <DialogClose asChild>
//             <Button type="button" variant="secondary">
//               Close
//             </Button>
//           </DialogClose>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EventDetailModal;

// import React from 'react';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { MapPin, Clock } from 'lucide-react';

// const EventDetailModal = ({ event, isOpen, onClose }) => {
//   if (!event) return null;

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle>{event.title}</DialogTitle>
//           <DialogDescription>
//             {event.description}
//           </DialogDescription>
//         </DialogHeader>
        
//         {/* Scrollable Rules Section */}
//         <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-4">
//           <div className="space-y-2">
//             <h4 className="font-medium">Rules & Regulations</h4>
//             <ul className="list-disc pl-5 space-y-1 text-sm">
//               {event.rules.map((rule, index) => (
//                 <li key={index}>{rule}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <DialogFooter className="sm:justify-end">
//           <DialogClose asChild>
//             <Button type="button" variant="secondary">
//               Close
//             </Button>
//           </DialogClose>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EventDetailModal;
import React from "react";
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
import { MapPin, Clock } from "lucide-react";

const EventDetailModal = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
          <DialogDescription>{event.description}</DialogDescription>
        </DialogHeader>

        {/* Optional Location & Time */}
        {event.location || event.time ? (
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            {event.location && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> {event.location}
              </div>
            )}
            {event.time && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" /> {event.time}
              </div>
            )}
          </div>
        ) : null}

        {/* Scrollable Rules Section */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-4">
          <div className="space-y-2">
            <h4 className="font-medium">Rules & Regulations</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {event.rules && event.rules.length > 0 ? (
                event.rules.map((rule, index) =>
                  typeof rule === "string" ? (
                    <li key={index}>{rule}</li>
                  ) : Array.isArray(rule) ? (
                    <li key={index}>
                      {rule[0]}
                      <ul className="list-[circle] pl-5 space-y-1">
                        {rule.slice(1).map((subRule, subIndex) => (
                          <li key={subIndex}>{subRule}</li>
                        ))}
                      </ul>
                    </li>
                  ) : null
                )
              ) : (
                <p className="text-gray-500 text-sm">No rules provided.</p>
              )}
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
