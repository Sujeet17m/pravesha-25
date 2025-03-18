
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="text-white/80 py-12 px-4 mt-8">
//       <div className="container mx-auto text-center">
//         <div className="mb-6">
//           <h3 className="text-xl font-medium mb-2">For inquiries, contact:</h3>
//                     <p className="mb-1">Student Coordinator: +91 9999999999</p>
//           <p>Faculty Coordinator: +91 9999999999</p>

//         </div>
        
//         <div className="text-sm text-white/60">
//           <p>&copy; 2025 Pravesha Symposium. All rights reserved.</p>
//           <p className="mt-1">Organised by Department of Computer Science</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="text-white/80 py-12 px-4 mt-8">
//       <div className="container mx-auto text-center">
//         <div className="mb-6">
//           <h3 className="text-xl font-medium mb-2">For inquiries, contact:</h3>
//                     <p className="mb-1">Student Coordinator: +91 9087358055</p>
//           <p>Faculty Coordinator: +91 9566290952</p>


//         </div>
        
//         <div className="text-sm text-white/60">
//           <p>&copy; 2025 Pravesha Symposium. All rights reserved.</p>
//           <p className="mt-1">Organised by Department of Computer Science</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="text-white/80 py-12 px-4 mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">For inquiries, contact:</h3>
          <p className="mb-1">Student Coordinator: +91 9999999999</p>
          <p>Faculty Coordinator: +91 9999999999</p>
        </div>
        
        <div className="text-sm text-white/60">
          <p>&copy; 2025 Pravesha Symposium. All rights reserved.</p>
          <p className="mt-1">Organised by Department of Computer Science</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
