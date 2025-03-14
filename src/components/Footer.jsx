
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white/80 py-12 px-4 mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">For inquiries, contact:</h3>
                    <p className="mb-1">Student Coordinator: +91 9999999999</p>
          <p>Faculty Coordinator: +91 9999999999</p>
{/*           <p>Staff Coordinators:</p>
<ul>
  <li>Dr.G.REVATHY - +91 9566290952</li>
  <li>Dr.P.THILAKAVATHY - +91 9400446608</li>
  <li>Ms.S.M.SOWMIYA</li>
  <li>Ms.S.SATHEA SREE</li>
</ul>
<p>Student Coordinators:</p>
<ul>
  <li>Mr.S.SANJAY - +91 9087358055</li>
  <li>Mr.UM.HARIKESARI - +91 8754681336</li>
  <li>Ms.G.ABINAYA - +91 8838182311</li>
  <li>Ms.S.PRABAVATHI - +91 9790991806</li>
</ul> */}

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
