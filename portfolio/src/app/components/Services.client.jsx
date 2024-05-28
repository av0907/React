// import React, { useState } from 'react';
// import './Services.css'; // Make sure to style your boxes in Services.css

// const servicesData = [
//   { category: 'Data', title: 'Data Analyst', description: 'Utilizing advanced data analytics to transform raw data into actionable insights, enhancing business decisions.' },
//   { category: 'Data', title: 'Machine Learning Engineer', description: 'Designing and building machine learning models to automate predictive tasks and drive efficiency.' },
//   { category: 'AI', title: 'AI Engineer', description: 'Integrating AI solutions into business processes to solve complex challenges and innovate product offerings.' },
//   { category: 'Cybersecurity', title: 'Cybersecurity Specialist', description: 'Protecting systems with advanced security protocols and measures to mitigate cyber threats.' },
//   // Add more services here
// ];

// function Services() {
//   const [activeFilter, setActiveFilter] = useState('All');

//   const handleFilterClick = (category) => {
//     setActiveFilter(category);
//   };

//   const filteredServices = servicesData.filter(service => activeFilter === 'All' || service.category === activeFilter);

//   return (
//     <div className="services-section">
//       <h1>Services</h1>
//       <div className="filters">
//         <button className={`filter-button ${activeFilter === 'All' ? 'active' : ''}`} onClick={() => handleFilterClick('All')}>All</button>
//         <button className={`filter-button ${activeFilter === 'Data' ? 'active' : ''}`} onClick={() => handleFilterClick('Data')}>Data</button>
//         <button className={`filter-button ${activeFilter === 'Frontend' ? 'active' : ''}`} onClick={() => handleFilterClick('Frontend')}>Frontend</button>
//         <button className={`filter-button ${activeFilter === 'Cybersecurity' ? 'active' : ''}`} onClick={() => handleFilterClick('Cybersecurity')}>Cybersecurity</button>
//       </div>
//       <div className="services-container">
//         {filteredServices.map((service, index) => (
//           <div className="service-box" key={index}>
//             <div className="highlight-box">{service.title}</div>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Services;
