// // // import React from 'react';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import {
// // //   faPython, faJava, faReact, faAws, faDocker, faNode,
// // //   faHtml5, faCss3, faLinux, faWindows, faGithub, faSalesforce,
// // //   faBootstrap, faJira, faGoogle, faMicrosoft, faDatabase,
// // //   faAndroid, faApple, faCss3Alt, faNodeJs, faUnity, faRProject
// // // } from '@fortawesome/free-brands-svg-icons';
// // // import { faServer } from '@fortawesome/free-solid-svg-icons';
// // // import { faJs } from '@fortawesome/free-brands-svg-icons';

// // // const iconStyles = {
// // //   color: '#fff',
// // //   width: '50px',
// // //   height: '50px',
// // // };

// // // const Skills = () => {
// // //   const skills = [
// // //     {
// // //       category: "Languages",
// // //       items: [
// // //         { name: "C", icon: faServer },
// // //         { name: "C++", icon: faServer },
// // //         { name: "Java", icon: faJava },
// // //         { name: "Python", icon: faPython },
// // //         { name: "JavaScript", icon: faJs },
// // //         { name: "HTML", icon: faHtml5 },
// // //         { name: "CSS", icon: faCss3Alt },
// // //       ],
// // //     },
// // //     {
// // //       category: "",
// // //       items: [
// // //         { name: "R", icon: faRProject },
// // //         { name: "React", icon: faReact },
// // //         { name: "Node.js", icon: faNodeJs },
// // //         { name: "Next.js", icon: faNodeJs },
// // //         { name: "Three.js", icon: faUnity },
// // //       ],
// // //     },
// // //     {
// // //       category: "Platforms",
// // //       items: [
// // //         { name: "Azure", icon: faMicrosoft },
// // //         { name: "AWS", icon: faAws },
// // //         { name: "Google Cloud Platform", icon: faGoogle },
// // //         { name: "Salesforce", icon: faSalesforce },
// // //       ],
// // //     },
// // //     {
// // //       category: "Software Tools",
// // //       items: [
// // //         { name: "Jira", icon: faJira },
// // //         { name: "Google Suite", icon: faGoogle },
// // //         { name: "Postman", icon: faGithub },
// // //         { name: "Docker", icon: faDocker },
// // //       ],
// // //     },
// // //     {
// // //       category: "Operating Systems",
// // //       items: [
// // //         { name: "Windows", icon: faWindows },
// // //         { name: "Linux", icon: faLinux },
// // //         { name: "Android", icon: faAndroid },
// // //         { name: "iOS", icon: faApple },
// // //       ],
// // //     },
// // //   ];

// // //   return (
// // //     <section id="skills">
// // //       <div className="skills-section" style={{ position: 'relative' }}>
// // //         <div
// // //           style={{
// // //             position: 'absolute',
// // //             top: 0,
// // //             bottom: 0,
// // //             left: '50%',
// // //             borderLeft: '2px solid #3b6a8c',
// // //             zIndex: 1,
// // //           }}
// // //         ></div>
// // //         <h3 className="text-6xl font-bold text-white mb-4" style={{ color: '#3b6a8c' }}>Skills</h3>
// // //         {skills.map((skillCategory) => (
// // //           <div key={skillCategory.category}>
// // //             <h3 className="text-2xl font-semibold text-white mt-3 mb-1">{skillCategory.category}</h3>
// // //             <ul className="list-none flex flex-wrap justify-center md:justify-start mb-3">
// // //               {skillCategory.items.map((skill) => (
// // //                 <li key={skill.name} className="flex flex-col items-center m-4">
// // //                   <FontAwesomeIcon icon={skill.icon} style={iconStyles} />
// // //                   <span className="mt-2 text-white" style={{ fontSize: '1.5rem' }}>{skill.name}</span>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         ))}
// // //         <div className="skills-usage" style={{
// // //           position: 'absolute',
// // //           top: '45%',
// // //           left: '90%',
// // //           transform: 'translate(-50%, -50%)',
// // //           width: '80%',
// // //           padding: '20px',
// // //           color: '#fff',
// // //           borderRadius: '10px',
// // //           zIndex: 10,
// // //           textAlign: 'center',
// // //         }}>
// // //           <div
// // //             className="flex justify-center mb-3"
// // //             style={{
// // //               position: 'relative',
// // //               top: '-25px',
// // //             }}
// // //           >
// // //             <h3 className="text-6xl font-semibold" style={{ color: '#3b6a8c' }}>What I do</h3>
// // //           </div>
// // //           <ul className="list-none">
// // //             <li className="mb-5 text-xl" >⚡ Design captivating user interfaces that blend beauty and functionality, creating memorable digital experiences.</li>
// // //             <li className="mb-5 text-xl">⚡ Dive into data insights, driving decisions with impactful analysis and visualization techniques.</li>
// // //             <li className="mb-5 text-xl">⚡ Explore the world of Progressive Web Applications (PWAs), crafting innovative solutions that push the boundaries of user interaction.</li>
// // //             <li className="mb-5 text-xl">⚡ Seamlessly integrate data-driven insights into design decisions, ensuring every detail enhances user engagement.</li>
// // //             <li className="mb-5 text-xl">⚡ Navigate technologies forefront with curiosity and adaptability, ready to shape the future of UI/UX and data-driven innovation while streamlining development with CI/CD pipelines.</li>
// // //           </ul>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Skills;

// // import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import {
// //   faPython, faJava, faReact, faAws, faDocker, faNode,
// //   faHtml5, faCss3, faLinux, faWindows, faGithub, faSalesforce,
// //   faBootstrap, faJira, faGoogle, faMicrosoft, faDatabase,
// //   faAndroid, faApple, faCss3Alt, faNodeJs, faRProject, faJs,
// //    // This replaces faUnity
  
// // } from '@fortawesome/free-brands-svg-icons';

// // import { faServer } from '@fortawesome/free-solid-svg-icons';

// // const iconStyles = {
// //   color: '#fff',
// //   width: '50px',
// //   height: '50px',
// // };

// // const Skills = () => {
// //   const skills = [
// //     {
// //       category: "Languages",
// //       items: [
// //         { name: "C", icon: faServer },
// //         { name: "C++", icon: faServer },
// //         { name: "Java", icon: faJava },
// //         { name: "Python", icon: faPython },
// //         { name: "JavaScript", icon: faJs },
// //         { name: "HTML", icon: faHtml5 },
// //         { name: "CSS", icon: faCss3Alt },
// //       ],
// //     },
// //     {
// //       category: "",
// //       items: [
// //         { name: "R", icon: faRProject },
// //         { name: "React", icon: faReact },
// //         { name: "Node.js", icon: faNodeJs },
// //         { name: "Next.js", icon: faNodeJs },
// //         // { name: "Three.js", icon: faCube }, // Using faCube to replace faUnity
// //       ],
// //     },
// //     {
// //       category: "Platforms",
// //       items: [
// //         { name: "Azure", icon: faMicrosoft },
// //         { name: "AWS", icon: faAws },
// //         { name: "Google Cloud Platform", icon: faGoogle },
// //         { name: "Salesforce", icon: faSalesforce },
// //       ],
// //     },
// //     {
// //       category: "Software Tools",
// //       items: [
// //         { name: "Jira", icon: faJira },
// //         { name: "Google Suite", icon: faGoogle },
// //         { name: "Postman", icon: faGithub },
// //         { name: "Docker", icon: faDocker },
// //       ],
// //     },
// //     {
// //       category: "Operating Systems",
// //       items: [
// //         { name: "Windows", icon: faWindows },
// //         { name: "Linux", icon: faLinux },
// //         { name: "Android", icon: faAndroid },
// //         { name: "iOS", icon: faApple },
// //       ],
// //     },
// //   ];

// //   return (
// //     <section id="skills">
// //       <div className="skills-section" style={{ position: 'relative' }}>
// //         <div
// //           style={{
// //             position: 'absolute',
// //             top: 0,
// //             bottom: 0,
// //             left: '50%',
// //             borderLeft: '2px solid #3b6a8c',
// //             zIndex: 1,
// //           }}
// //         ></div>
// //         <h3 className="text-6xl font-bold text-white mb-4" style={{ color: '#3b6a8c' }}>Skills</h3>
// //         {skills.map((skillCategory) => (
// //           <div key={skillCategory.category}>
// //             <h3 className="text-2xl font-semibold text-white mt-3 mb-1">{skillCategory.category}</h3>
// //             <ul className="list-none flex flex-wrap justify-center md:justify-start mb-3">
// //               {skillCategory.items.map((skill) => (
// //                 <li key={skill.name} className="flex flex-col items-center m-4">
// //                   <FontAwesomeIcon icon={skill.icon} style={iconStyles} />
// //                   <span className="mt-2 text-white" style={{ fontSize: '1.5rem' }}>{skill.name}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         ))}
// //         <div className="skills-usage" style={{
// //           position: 'absolute',
// //           top: '45%',
// //           left: '90%',
// //           transform: 'translate(-50%, -50%)',
// //           width: '80%',
// //           padding: '20px',
// //           color: '#fff',
// //           borderRadius: '10px',
// //           zIndex: 10,
// //           textAlign: 'center',
// //         }}>
// //           <div
// //             className="flex justify-center mb-3"
// //             style={{
// //               position: 'relative',
// //               top: '-25px',
// //             }}
// //           >
// //             <h3 className="text-6xl font-semibold" style={{ color: '#3b6a8c' }}>What I do</h3>
// //           </div>
// //           <ul className="list-none">
// //             <li className="mb-5 text-xl" >⚡ Design captivating user interfaces that blend beauty and functionality, creating memorable digital experiences.</li>
// //             <li className="mb-5 text-xl">⚡ Dive into data insights, driving decisions with impactful analysis and visualization techniques.</li>
// //             <li className="mb-5 text-xl">⚡ Explore the world of Progressive Web Applications (PWAs), crafting innovative solutions that push the boundaries of user interaction.</li>
// //             <li className="mb-5 text-xl">⚡ Seamlessly integrate data-driven insights into design decisions, ensuring every detail enhances user engagement.</li>
// //             <li className="mb-5 text-xl">⚡ Navigate technologies forefront with curiosity and adaptability, ready to shape the future of UI/UX and data-driven innovation while streamlining development with CI/CD pipelines.</li>
// //           </ul>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Skills;
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faPython, faJava, faReact, faAws, faDocker, faNode,
//   faHtml5, faCss3, faLinux, faWindows, faGithub, faSalesforce,
//   faBootstrap, faJira, faGoogle, faMicrosoft, faDatabase,
//   faAndroid, faApple, faCss3Alt, faNodeJs, faRProject, faJs,
// } from '@fortawesome/free-brands-svg-icons';

// import { faServer } from '@fortawesome/free-solid-svg-icons';

// const iconStyles = {
//   color: '#fff',
//   width: '50px',
//   height: '50px',
// };

// const Skills = () => {
//   const skills = [
//     {
//       category: "Languages",
//       items: [
//         { name: "C", icon: faServer },
//         { name: "C++", icon: faServer },
//         { name: "Java", icon: faJava },
//         { name: "Python", icon: faPython },
//         { name: "JavaScript", icon: faJs },
//         { name: "HTML", icon: faHtml5 },
//         { name: "CSS", icon: faCss3Alt },
//       ],
//     },
//     {
//       category: "",
//       items: [
//         { name: "R", icon: faRProject },
//         { name: "React", icon: faReact },
//         { name: "Node.js", icon: faNodeJs },
//         { name: "Next.js", icon: faNodeJs },
//       ],
//     },
//     {
//       category: "Platforms",
//       items: [
//         { name: "Azure", icon: faMicrosoft },
//         { name: "AWS", icon: faAws },
//         { name: "Google Cloud Platform", icon: faGoogle },
//         { name: "Salesforce", icon: faSalesforce },
//       ],
//     },
//     {
//       category: "Software Tools",
//       items: [
//         { name: "Jira", icon: faJira },
//         { name: "Google Suite", icon: faGoogle },
//         { name: "Postman", icon: faGithub },
//         { name: "Docker", icon: faDocker },
//       ],
//     },
//     {
//       category: "Operating Systems",
//       items: [
//         { name: "Windows", icon: faWindows },
//         { name: "Linux", icon: faLinux },
//         { name: "Android", icon: faAndroid },
//         { name: "iOS", icon: faApple },
//       ],
//     },
//   ];

//   return (
//     <section id="skills">
//       <div className="skills-section">
//         <h3 className="text-6xl font-bold text-white mb-4" style={{ color: '#3b6a8c' }}>Skills</h3>
//         {skills.map((skillCategory) => (
//           <div key={skillCategory.category}>
//             <h3 className="text-2xl font-semibold text-white mt-3 mb-1">{skillCategory.category}</h3>
//             <ul className="list-none flex flex-wrap justify-center md:justify-start mb-3">
//               {skillCategory.items.map((skill) => (
//                 <li key={skill.name} className="flex flex-col items-center m-4">
//                   <FontAwesomeIcon icon={skill.icon} style={iconStyles} />
//                   <span className="mt-2 text-white" style={{ fontSize: '1.5rem' }}>{skill.name}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
      
//       <div className="skills-usage text-center mt-8">
//         <h3 className="text-6xl font-semibold mb-6" style={{ color: '#3b6a8c' }}>What I do</h3>
//         <ul className="list-none">
//           <li className="mb-5 text-xl" style={{ color: 'white' }}>⚡ Design captivating user interfaces that blend beauty and functionality, creating memorable digital experiences.</li>
//           <li className="mb-5 text-xl" style={{ color: 'white' }}>⚡ Dive into data insights, driving decisions with impactful analysis and visualization techniques.</li>
//           <li className="mb-5 text-xl" style={{ color: 'white' }}>⚡ Explore the world of Progressive Web Applications (PWAs), crafting innovative solutions that push the boundaries of user interaction.</li>
//           <li className="mb-5 text-xl" style={{ color: 'white' }}>⚡ Seamlessly integrate data-driven insights into design decisions, ensuring every detail enhances user engagement.</li>
//           <li className="mb-5 text-xl" style={{ color: 'white' }}>⚡ Navigate technologies forefront with curiosity and adaptability, ready to shape the future of UI/UX and data-driven innovation while streamlining development with CI/CD pipelines.</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython, faJava, faReact, faAws, faDocker, faNode,
  faHtml5, faCss3, faLinux, faWindows, faGithub, faSalesforce,
  faBootstrap, faJira, faGoogle, faMicrosoft, faDatabase,
  faAndroid, faApple, faCss3Alt, faNodeJs, faRProject, faJs,
} from '@fortawesome/free-brands-svg-icons';

import { faServer } from '@fortawesome/free-solid-svg-icons';

const iconStyles = {
  color: '#fff',
  width: '50px',
  height: '50px',
};

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "C", icon: faServer },
        { name: "C++", icon: faServer },
        { name: "Java", icon: faJava },
        { name: "Python", icon: faPython },
        { name: "JavaScript", icon: faJs },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
      ],
    },
    {
      category: "",
      items: [
        { name: "R", icon: faRProject },
        { name: "React", icon: faReact },
        { name: "Node.js", icon: faNodeJs },
        { name: "Next.js", icon: faNodeJs },
      ],
    },
    {
      category: "Platforms",
      items: [
        { name: "Azure", icon: faMicrosoft },
        { name: "AWS", icon: faAws },
        { name: "Google Cloud Platform", icon: faGoogle },
        { name: "Salesforce", icon: faSalesforce },
      ],
    },
    {
      category: "Software Tools",
      items: [
        { name: "Jira", icon: faJira },
        { name: "Google Suite", icon: faGoogle },
        { name: "Postman", icon: faGithub },
        { name: "Docker", icon: faDocker },
      ],
    },
    {
      category: "Operating Systems",
      items: [
        { name: "Windows", icon: faWindows },
        { name: "Linux", icon: faLinux },
        { name: "Android", icon: faAndroid },
        { name: "iOS", icon: faApple },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="skills-section">
        <h3 className="text-6xl font-bold text-white mb-4" style={{ color: '#3b6a8c' }}>Skills</h3>
        {skills.map((skillCategory) => (
          <div key={skillCategory.category}>
            <h3 className="text-2xl font-semibold text-white mt-3 mb-1">{skillCategory.category}</h3>
            <ul className="list-none flex flex-wrap justify-center md:justify-start mb-3">
              {skillCategory.items.map((skill) => (
                <li key={skill.name} className="flex flex-col items-center m-4">
                  <FontAwesomeIcon icon={skill.icon} style={iconStyles} />
                  <span className="mt-2 text-white" style={{ fontSize: '1.5rem' }}>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        style={{
          width: '100%',
          borderBottom: '2px solid #3b6a8c',
          margin: '20px 0',
        }}
      ></div>
      <div className="skills-usage" style={{
        width: '80%',
        margin: '0 auto',
        padding: '20px',
        color: '#fff',
        textAlign: 'center',
      }}>
        <div className="flex justify-center mb-3">
          <h3 className="text-6xl font-semibold" style={{ color: '#3b6a8c' }}>What I do</h3>
        </div>
        <ul className="list-none">
          <li className="mb-5 text-xl">⚡ Develop scalable and secure web applications, ensuring optimal performance and user satisfaction.</li>
          <li className="mb-5 text-xl">⚡ Create responsive and intuitive user interfaces, enhancing user experience across devices and platforms.</li>
          <li className="mb-5 text-xl">⚡ Implement advanced front-end technologies and frameworks to build modern, dynamic web applications.</li>
          <li className="mb-5 text-xl">⚡ Utilize robust back-end development techniques, integrating APIs and databases for seamless data flow.</li>
          <li className="mb-5 text-xl">⚡  Stay ahead of industry trends and technologies, continuously learning and applying best practices to drive innovation.</li>
          <li className="mb-5 text-xl">⚡  Optimize application performance through code reviews, testing, and debugging, ensuring high-quality deliverables.</li>
          <li className="mb-5 text-xl">⚡  Collaborate with cross-functional teams to understand requirements and deliver solutions that meet business goals.</li>
          <li className="mb-5 text-xl">⚡  Employ Agile methodologies and DevOps practices to streamline development processes and accelerate project timelines.</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;