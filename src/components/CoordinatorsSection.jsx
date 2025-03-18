
// import React from 'react';
// import { coordinators } from '@/data/events';

// const CoordinatorsSection = () => {
//   return (
//     <div className="container mx-auto px-4 py-12 text-center">
//       <h2 className="text-2xl font-bold text-white mb-8">Event Coordinators</h2>
      
//       <div className="flex flex-col md:flex-row justify-center gap-6">
//         {coordinators.map((coordinator, index) => (
//           <div 
//             key={index} 
//             className="bg-symposium-card backdrop-blur-sm p-6 rounded-lg max-w-xs mx-auto md:mx-0"
//           >
//             <h3 className="text-lg font-semibold text-white mb-2">{coordinator.title}</h3>
//             <p className="text-gray-200">{coordinator.name} - <span className="text-blue-300">{coordinator.phone}</span></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CoordinatorsSection;

// import React from 'react';

// const coordinators = [
//   {
//     title: "Staff Coordinators",
//     members: [
//       { name: "Dr.G.REVATHY", phone: "+91 9566290952" },
//       { name: "Dr.P.THILAKAVATHY", phone: "+91 9400446608" },
//       { name: "Ms.S.M.SOWMIYA", phone: "N/A" },
//       { name: "Ms.S.SATHEA SREE", phone: "N/A" }
//     ]
//   },
//   {
//     title: "Student Coordinators",
//     members: [
//       { name: "Mr.S.SANJAY", phone: "+91 9087358055" },
//       { name: "Mr.UM.HARIKESARI", phone: "+91 8754681336" },
//       { name: "Ms.G.ABINAYA", phone: "+91 8838182311" },
//       { name: "Ms.S.PRABAVATHI", phone: "+91 9790991806" }
//     ]
//   }
// ];

// const CoordinatorsSection = () => {
//   return (
//     <div className="container mx-auto px-4 py-12 text-center">
//       <h2 className="text-2xl font-bold text-white mb-8">Event Coordinators</h2>
      
//       <div className="flex flex-col md:flex-row justify-center gap-6">
//         {coordinators.map((coordinator, index) => (
//           <div 
//             key={index} 
//             className="bg-symposium-card backdrop-blur-sm p-6 rounded-lg shadow-lg w-full md:w-1/2"
//           >
//             <h3 className="text-xl font-semibold mb-4">{coordinator.title}</h3>
//             <ul className="text-left">
//               {coordinator.members.map((member, i) => (
//                 <li key={i} className="mb-2">
//                   <span className="font-medium">{member.name}</span>: {member.phone}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CoordinatorsSection;
// import React from 'react';

// const coordinators = [
//   {
//     title: "Staff Coordinators",
//     members: [
//       { name: "Dr. G. REVATHY", phone: "+91 9566290952" },
//       { name: "Dr. P. THILAKAVATHY", phone: "+91 9400446608" },
//       { name: "Ms. S. M. SOWMIYA", phone: "N/A" },
//       { name: "Ms. S. SATHEA SREE", phone: "N/A" }
//     ]
//   },
//   {
//     title: "Student Coordinators",
//     members: [
//       { name: "Mr. S. SANJAY", phone: "+91 9087358055" },
//       { name: "Mr. UM. HARIKESARI", phone: "+91 8754681336" },
//       { name: "Ms. G. ABINAYA", phone: "+91 8838182311" },
//       { name: "Ms. S. PRABAVATHI", phone: "+91 9790991806" }
//     ]
//   }
// ];

// const CoordinatorsSection = () => {
//   return (
//     <div className="container mx-auto px-4 py-12 text-center">
//       <h2 className="text-2xl font-bold text-white mb-8">Event Coordinators</h2>
      
//       <div className="flex flex-col md:flex-row justify-center gap-6">
//         {coordinators.map((coordinator, index) => (
//           <div 
//             key={index} 
//             className="bg-symposium-card backdrop-blur-sm p-6 rounded-lg shadow-lg w-full md:w-1/2"
//           >
//             <h3 className="text-xl font-semibold mb-4">{coordinator.title}</h3>
//             <ul className="text-left">
//               {coordinator.members.map((member, i) => (
//                 <li key={i} className="mb-2">
//                   <span className="font-medium">{member.name}</span>: <span className="text-gray-300">{member.phone}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CoordinatorsSection;

// import React from 'react';

// const coordinators = [
//   {
//     title: "Staff Coordinators",
//     members: [
//       { name: "Dr. G. REVATHY", phone: "+91 9566290952" },
//       { name: "Dr. P. THILAKAVATHY", phone: "+91 9400446608" },
//       { name: "Ms. S. M. SOWMIYA", phone: "N/A" },
//       { name: "Ms. S. SATHEA SREE", phone: "N/A" }
//     ]
//   },
//   {
//     title: "Student Coordinators",
//     members: [
//       { name: "Mr. S. SANJAY", phone: "+91 9087358055" },
//       { name: "Mr. UM. HARIKESARI", phone: "+91 8754681336" },
//       { name: "Ms. G. ABINAYA", phone: "+91 8838182311" },
//       { name: "Ms. S. PRABAVATHI", phone: "+91 9790991806" }
//     ]
//   }
// ];

// const CoordinatorsSection = () => {
//   return (
//     <div className="container mx-auto px-4 py-12 text-center">
//       <h2 className="text-2xl font-bold text-white mb-8">Event Coordinators</h2>
      
//       <div className="flex flex-col md:flex-row justify-center gap-6">
//         {coordinators.map((coordinator, index) => (
//           <div 
//             key={index} 
//             className="bg-symposium-card backdrop-blur-sm p-6 rounded-lg shadow-lg w-full md:w-1/2"
//           >
//             <h3 className="text-xl font-semibold mb-4">{coordinator.title}</h3>
//             <ul className="text-left">
//               {coordinator.members.map((member, i) => (
//                 <li key={i} className="mb-2">
//                   <span className="font-medium">{member.name}</span>: <span className="text-gray-300">{member.phone}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CoordinatorsSection;

import React from 'react';

const coordinators = [
  {
    title: "Staff Coordinators",
    members: [
      { name: "Dr. G. REVATHY", phone: "+91 9566290952" },
      { name: "Dr. P. THILAKAVATHY", phone: "+91 9400446608" },
      { name: "Ms. S. M. SOWMIYA", phone: "N/A" },
      { name: "Ms. S. SATHEA SREE", phone: "N/A" }
    ]
  },
  {
    title: "Student Coordinators",
    members: [
      { name: "Mr. S. SANJAY", phone: "+91 9087358055" },
      { name: "Mr. UM. HARIKESARI", phone: "+91 8754681336" },
      { name: "Ms. G. ABINAYA", phone: "+91 8838182311" },
      { name: "Ms. S. PRABAVATHI", phone: "+91 9790991806" }
    ]
  }
];

const CoordinatorsSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold text-white mb-8">Event Coordinators</h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {coordinators.map((coordinator, index) => (
          <div 
            key={index} 
            className="bg-symposium-card backdrop-blur-sm p-6 rounded-lg shadow-lg w-full md:w-1/2"
          >
            <h3 className="text-xl font-semibold mb-4">{coordinator.title}</h3>
            <ul className="text-left">
              {coordinator.members.map((member, i) => (
                <li key={i} className="mb-2">
                  <span className="font-medium">{member.name}</span>: <span className="text-gray-300">{member.phone}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoordinatorsSection;


