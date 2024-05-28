"use client";

import React from 'react';
import Image from 'next/image';

// Each section component can be split further if needed
const AboutMe = () => (
  <div className="text-white py-8 px-4 sm:py-16 xl:px-16"  >
    <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
      <Image src="/images/AI.webp" alt="About Me Image" width={500} height={500} priority />
      <div>
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#074368' }}>About Me</h2>
        <p className="text-lg" style={{ color: 'white' }}>
        🌟 Hey! I{'\''}m Aditya Vishnu Oruganti, your expert web application developer and digital innovator. From designing responsive interfaces to engineering robust back-end solutions, I specialize in transforming ideas into dynamic, user-friendly web experiences. Whether I{'\''}m optimizing performance for seamless interactions or integrating cutting-edge technologies to enhance functionality, I combine technical prowess with creative vision to build web applications that engage, inspire, and deliver exceptional results. 🚀🤖✨
        </p>
      </div>
    </div>
  </div>
);
// import React from 'react';
// import Image from 'next/image';

// const AboutMe = () => (
//   <div className="text-white py-8 px-4 sm:py-16 xl:px-16">
//     <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
//       <div className="image-wrapper">
//         <Image
//           src="/images/about-image.png"
//           alt="About Me Image"
//           width={500}
//           height={500}
//           priority
//         />
//       </div>
//       <div>
//         <h2 className="text-4xl font-bold mb-4">About Me</h2>
//         <p className="text-lg">
//           🌟 Hey! I'm Gnan Akshith Moyya, your go-to data whiz, and webdev guru. From crunching numbers to crafting algorithms that predict the future, I’m all about turning complex data puzzles into sleek, smart solutions. Whether I’m managing products that dazzle, or developing web apps that connect and inspire, I blend tech expertise with strategic vision to create digital magic. 🚀🤖✨
//         </p>
//       </div>
//     </div>
//     <style jsx>{`
//       .image-wrapper {
//         transition: transform 0.3s ease-in-out;
//         box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.5); /* Blue shadow */
//       }
//       .image-wrapper:hover {
//         transform: translateY(-10px); /* Moves up slightly on hover */
//       }
//     `}</style>
//   </div>
// );




// const Skills = () => (
//   <div className="text-white py-8 px-4 sm:py-16 xl:px-16 bg-gray-800">
//     <h2 className="text-4xl font-bold mb-4">Skills</h2>
//     <ul className="list-disc pl-4">
//       <li>Node.js</li>
//       <li>Express</li>
//       <li>PostgreSQL</li>
//       <li>Sequelize</li>
//       <li>JavaScript</li>
//       <li>React</li>
//     </ul>
//   </div>
// );

// const Education = () => (
//   <div className="text-white py-8 px-4 sm:py-16 xl:px-16 bg-gray-700">
//     <h2 className="text-4xl font-bold mb-4">Education</h2>
//     <ul className="list-disc pl-4">
//       <li>Fullstack Academy of Code</li>
//       <li>University of California, Santa Cruz</li>
//     </ul>
//   </div>
// );



const AboutSection = () => {
  return (
    <section>
      <AboutMe />
      {/* <Skills />
      <Education />
      <Certifications /> */}
    </section>
  );
};

export default AboutSection;