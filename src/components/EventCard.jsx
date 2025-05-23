
// import React from 'react';
// import { Button } from '@/components/ui/button';

// const EventCard = ({ event, onClick }) => {
//   const Icon = event.icon;
  
//   return (
//     <div className="event-card mb-4 p-4 flex flex-col relative">
//       <div className="flex items-start gap-3">
//         <div className="text-white p-1">
//           <Icon className="h-6 w-6" />
//         </div>
//         <div className="text-left flex-1">
//           <h3 className="text-white font-bold">{event.title}</h3>
//           <p className="text-gray-200 text-sm mt-1">{event.description}</p>
//         </div>
//         <div className="text-white font-bold self-start">
//           {event.price}
//         </div>
//       </div>
      
//       <div className="flex justify-end gap-2 mt-4">
//         <Button 
//           variant="secondary" 
//           className="text-white bg-purple-500 hover:bg-purple-600"
//           onClick={() => onClick(event)}
//         >
//           View Details
//         </Button>
//         <Button 
//           className="bg-blue-500 hover:bg-blue-600 text-white"
//           onClick={() => window.open('https://example.com/register', '_blank')}
//         >
//           Register Now
//         </Button>
//       </div>
//     </div>
//   );
// };

// import React from 'react';
// import { Button } from '@/components/ui/button';

// const EventCard = ({ event, onClick }) => {
//   const Icon = event.icon;
  
//   return (
//     <div className="event-card mb-4 p-4 flex flex-col relative">
//       <div className="flex items-start gap-3">
//         <div className="text-white p-1">
//           <Icon className="h-6 w-6" />
//         </div>
//         <div className="text-left flex-1">
//           <h3 className="text-white font-bold">{event.title}</h3>
//           <p className="text-gray-300 text-sm mt-1">{event.description}</p>
//         </div>
//         <div className="text-white font-bold self-start">
//           {event.price}
//         </div>
//       </div>
      
//       <div className="flex justify-end gap-2 mt-4">
//         <Button 
//           variant="secondary" 
//           className="text-white bg-purple-500 hover:bg-purple-600"
//           onClick={() => onClick(event)}
//         >
//           View Details
//         </Button>
//         <Button 
//           className="bg-blue-500 hover:bg-blue-600 text-white"
//           onClick={() => window.open('https://example.com/register', '_blank')}
//         >
//           Register Now
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EventCard;
// export default EventCard;
// import React from 'react';
// import { Button } from '@/components/ui/button';

// const EventCard = ({ event, onClick }) => {
//   const Icon = event.icon;
  
//   return (
//     <div className="event-card mb-4 p-4 flex flex-col relative">
//       <div className="flex items-start gap-3">
//         <div className="text-white p-1">
//           <Icon className="h-6 w-6" />
//         </div>
//         <div className="text-left flex-1">
//           <h3 className="text-white font-bold">{event.title}</h3>
//           <p className="text-gray-300 text-sm mt-1">{event.description}</p>
//         </div>
//         <div className="text-white font-bold self-start">
//           {event.price}
//         </div>
//       </div>
      
//       <div className="flex justify-end gap-2 mt-4">
//         <Button 
//           variant="secondary" 
//           className="text-white bg-purple-500 hover:bg-purple-600"
//           onClick={() => onClick(event)}
//         >
//           View Details
//         </Button>
//         <Button 
//           className="bg-blue-500 hover:bg-blue-600 text-white"
//           asChild
//         >
//           <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
//             Register Now
//           </a>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

// import React from 'react';
// import { Button } from '@/components/ui/button';

// const EventCard = ({ event, onClick }) => {
//   const Icon = event.icon;
  
//   return (
//     <div className="event-card mb-4 p-4 flex flex-col relative">
//       <div className="flex items-start gap-3">
//         <div className="text-white p-1">
//           <Icon className="h-6 w-6" />
//         </div>
//         <div className="text-left flex-1">
//           <h3 className="text-white font-bold">{event.title}</h3>
//           <p className="text-gray-300 text-sm mt-1">{event.description}</p>
//         </div>
//         <div className="text-white font-bold self-start">
//           {event.price}
//         </div>
//       </div>
      
//       <div className="flex justify-end gap-2 mt-4">
//         <Button 
//           variant="secondary" 
//           className="text-white bg-purple-500 hover:bg-purple-600"
//           onClick={() => onClick(event)}
//         >
//           View Details
//         </Button>
//         <Button 
//           className="bg-blue-500 hover:bg-blue-600 text-white"
//           asChild
//         >
//           <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
//             Register Now
//           </a>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

// import React from 'react';
// import { Button } from '@/components/ui/button';

// const EventCard = ({ event, onClick }) => {
//   const Icon = event.icon;
  
//   return (
//     <div className="event-card mb-4 p-4 flex flex-col relative bg-opacity-90">
//       <div className="flex items-start gap-3">
//         <div className="text-white p-1">
//           <Icon className="h-6 w-6" />
//         </div>
//         <div className="text-left flex-1">
//           <h3 className="text-white font-bold drop-shadow-md shadow-black">{event.title}</h3>
//           <p className="text-gray-100 text-sm mt-1 drop-shadow-md shadow-black">{event.description}</p>
//         </div>
//         <div className="text-white font-bold self-start drop-shadow-md shadow-black">
//           {event.price}
//         </div>
//       </div>
      
//       <div className="flex justify-end gap-2 mt-4">
//         <Button 
//           variant="secondary" 
//           className="text-white bg-purple-500 hover:bg-purple-600 drop-shadow-md shadow-black"
//           onClick={() => onClick(event)}
//         >
//           View Details
//         </Button>
//         <Button 
//           className="bg-blue-500 hover:bg-blue-600 text-white drop-shadow-md shadow-black"
//           asChild
//         >
//           <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
//             Register Now
//           </a>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

import React from 'react';
import { Button } from '@/components/ui/button';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card mb-4 p-4 flex flex-col relative bg-opacity-90">
      <div className="flex items-start gap-3">
        <div className="text-left flex-1">
          <h3 className="text-white font-bold drop-shadow-md shadow-black">{event.title}</h3>
          <p className="text-gray-100 text-sm mt-1 drop-shadow-md shadow-black">{event.description}</p>
        </div>
      </div>
      
      <div className="flex justify-end gap-2 mt-4">
        <Button 
          variant="secondary" 
          className="text-white bg-purple-500 hover:bg-purple-600 drop-shadow-md shadow-black"
          onClick={() => onClick(event)}
        >
          View Details
        </Button>
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white drop-shadow-md shadow-black"
          asChild
        >
          <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default EventCard;


