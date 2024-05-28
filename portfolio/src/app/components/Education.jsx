  // // import React from 'react';

  // // const EducationSection = () => {
  // //   const educationEntries = [
  // //     {
  // //       year: '2011',
  // //       institution: 'S.O.S. Educação Profissional',
  // //       category: 'Curso profissionalizante',
  // //       title: 'Administração, empregabilidade, digitação e informática fundamental',
  // //       side: 'right', // 2011 box on the left
  // //     },
  // //     {
  // //       year: '2013',
  // //       institution: 'Armazém Paraíba',
  // //       category: 'Experiência Profissional',
  // //       title: 'Auxiliar administrativo',
  // //       side: 'left', // 2013 box on the right
  // //     },
  // //     // ... Add more entries as needed
  // //   ];

  // //   const timelineStyle = {
  // //     display: 'flex',
  // //     flexDirection: 'column',
  // //     position: 'relative',
  // //     marginTop: '20px',
  // //     width: '100%',
  // //   };

  // //   const lineStyle = {
  // //     position: 'absolute',
  // //     top: 0,
  // //     bottom: 0,
  // //     left: '50%',
  // //     width: '4px',
  // //     backgroundColor: 'gold',
  // //   };

  // //   const entryStyle = (side) => ({
  // //     display: 'flex',
  // //     justifyContent: side === 'left' ? 'flex-end' : 'flex-start',
  // //     alignItems: 'center',
  // //     marginBottom: '40px',
  // //   });

  // //   const entryContentStyle = (side) => ({
  // //     backgroundColor: 'black',
  // //     color: 'white',
  // //     padding: '10px 20px',
  // //     borderRadius: '5px',
  // //     position: 'relative',
  // //     zIndex: 1, // To make sure the text box appears above the line
  // //     textAlign: 'center',
  // //     width: 'auto',
  // //     //30pxmaxWidth: '40%', // Prevent the box from being too wide
  // //     marginLeft: side === 'left' ? '0' : '15px', // Adjust as necessary
  // //     marginRight: side === 'left' ? '-30' : '0',
  // //   });

  // //   const yearStyle = {
  // //     display: 'block',
  // //     color: 'gold',
  // //     fontWeight: 'bold',
  // //     marginBottom: '5px',
  // //   };

  // //   const entryMarkerStyle = {
  // //     width: '24px',
  // //     height: '24px',
  // //     backgroundColor: 'gold',
  // //     border: '4px solid black',
  // //     borderRadius: '50%',
  // //     position: 'absolute',
  // //     left: '50.1%',
  // //     transform: 'translate(-50%, -50%)',
  // //   };

  // //   return (
  // //     <div style={{ position: 'relative', width: '100%' }}>
  // //       <h2 style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', color: 'gold', fontSize: '22px' }}>EXPERIÊNCIA</h2>
  // //       <div style={timelineStyle}>
  // //         <div style={lineStyle}></div>
  // //         {educationEntries.map((entry) => (
  // //           <div key={entry.year} style={entryStyle(entry.side)}>
  // //             <div style={entryContentStyle(entry.side)}>
  // //               <span style={yearStyle}>{entry.year}</span>
  // //               <div>{entry.institution}</div>
  // //               <div>{entry.category}</div>
  // //               <div>{entry.title}</div>
  // //             </div>
  // //             <div style={entryMarkerStyle}></div>
  // //           </div>
  // //         ))}
  // //       </div>
  // //     </div>
  // //   );
  // // };

  // // export default EducationSection;
  // import React from 'react';

  // const EducationSection = () => {
  //   const educationEntries = [
  //     {
  //       year: '2022-2024',
  //       institution: 'California State University, Long Beach',
  //       degree: 'Masters of Science in Information Systems',
  //       courses: 'fundamental',
  //       side: 'left',
  //       image: 'https://via.placeholder.com/100x100', // Add the image URL here
  //     },
  //     {
  //       year: '2018-2022',
  //       institution: 'Malla Reddy College of Engineering and Technology',
  //       degree: 'Bachelors of Technology in Information Technology',
  //       major: 'Information Technology',
  //       courses: 'Auxiliar',
  //       side: 'right',
  //       image: 'https://via.placeholder.com/100x100', // Add the image URL here
  //     },
  //     // ... Add more entries as needed
  //   ];

  //   const timelineStyle = {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     position: 'relative',
  //     marginTop: '20px',
  //     width: '100%',
  //   };

  //   const lineStyle = {
  //     position: 'absolute',
  //     top: 0,
  //     bottom: 0,
  //     left: '50%',
  //     width: '4px',
  //     backgroundColor: 'gold',
  //   };

  //   const entryStyle = (side) => ({
  //     display: 'flex',
  //     justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
  //     alignItems: 'center',
  //     marginBottom: '40px',
  //   });

  //   const entryContentStyle = {
  //     backgroundColor: '',
  //     color: 'white',
  //     padding: '10px 20px',
  //     borderRadius: '5px',
  //     position: 'relative',
  //     zIndex: 1,
  //     textAlign: 'center',
  //     width: 'auto',
  //     // maxWidth: '40%',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //   };

  //   const yearStyle = {
  //     display: 'block',
  //     color: 'gold',
  //     fontWeight: 'bold',
  //     marginBottom: '5px',
  //   };

  //   const entryMarkerStyle = {
  //     width: '24px',
  //     height: '24px',
  //     backgroundColor: 'gold',
  //     border: '4px solid black',
  //     borderRadius: '50%',
  //     position: 'absolute',
  //     left: '50.1%',
  //     transform: 'translate(-50%, -50%)',
  //   };

  //   const imageStyle = {
  //     width: '500px',
  //     height: '500px',
  //     borderRadius: '5%',
  //     marginBottom: '10px',
  //   };
  //   const textContainerStyle = {
  //     backgroundColor: '#333', // Or any color you prefer for the rectangle
  //     color: 'white',
  //     padding: '10px 20px',
  //     borderRadius: '5px',
  //     marginTop: '10px', // Creates space between the image and the text container
  //     textAlign: 'center',
  //   };

    
  //   const institutionStyle = {
  //     color: 'gold', // Text color
  //     fontWeight: 'bold', // Bold text
  //     fontSize: '1em', // Font size
  //     marginBottom: '3px', // Space below the text
  //   };
    
  //   const degreeStyle = {
  //     color: 'white', // Text color
  //     fontSize: '0.9em', // Smaller font size
  //     marginBottom: '2px', // Space below the text
  //   };
    
  //   const coursesStyle = {
  //     color: 'white', // Text color
  //     fontSize: '0.8em', // Even smaller font size
  //     marginBottom: '2px', // Space below the text
  //   };
    
  //   return (
  //     <div style={{ position: 'relative', width: '100%' }}>
  //       <h2 style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', color: 'gold', fontSize: '22px' }}>EDUCATION</h2>
  //       <div style={timelineStyle}>
  //         <div style={lineStyle}></div>
  //         {educationEntries.map((entry) => (
  //           <div key={entry.year} style={entryStyle(entry.side)}>
  //             <div style={entryContentStyle}>
  //               <img src={entry.image} alt={entry.institution} style={imageStyle} />
  //               <span style={yearStyle}>{entry.year}</span>
  //               <div>{entry.institution}</div>
  //               <div>{entry.degree}</div>
                
  //               <div>{entry.courses}</div>
  //             </div>
  //             <div style={entryMarkerStyle}></div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  // export default EducationSection;
  import React from 'react';

  const EducationSection = () => {
    const educationEntries = [
      {
        year: '2022-2024',
        institution: 'California State University, Long Beach',
        degree: 'Masters in Computer Science',
        // courses: 'Courses: Business Analytics, Artificial Intelligence, Deep Learning for Business, Cybersecurity Analytics, technology-based startups focusing on AI and blockchain applications, Information Systems Security.',
        side: 'left',
        image: '/images/CSULB.jpg', // Add the image URL here
      },
      {
        year: '2020-2021',
        institution: 'Fidelity National Information Services, Inc.',
        degree: 'DevOps Engineer',
        major: 'Computer Science',
        // courses: 'Courses: Data Structures, Algorithms, Networking Systems, Database Management, Software Engineering, Advanced Programming, Cybersecurity, Artificial Intelligence, Machine Learning, Web Development and Mobile Application Development.',
        side: 'right',
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_m-dmhaXsmxBqi4nOVPXVX8ydLn1f781GsWvJ2oKG73TcA=s900-c-k-c0x00ffffff-no-rj', // Add the image URL here
      },
      {
        year: '2016-2020',
        institution: 'PBR VITS',
        degree: 'Bachelors of Technology in Computer Science',
        major: 'Computer Science',
        // courses: 'Courses: Data Structures, Algorithms, Networking Systems, Database Management, Software Engineering, Advanced Programming, Cybersecurity, Artificial Intelligence, Machine Learning, Web Development and Mobile Application Development.',
        side: 'left',
        image: 'https://images.collegedunia.com/public/college_data/images/campusimage/14156904832.JPG', // Add the image URL here
      },
      // ... Add more entries as needed
    ];

    const timelineStyle = {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      marginTop: '20px',
      width: '100%',
    };

    const lineStyle = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '50%',
      width: '4px',
      backgroundColor: '#04293a',
    };

    // const entryStyle = (side) => ({
    //   display: 'flex',
    //   justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
    //   alignItems: 'center',
    //   marginBottom: '40px',
    // });

    const entryStyle = (side) => ({
      display: 'flex',
      justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
      alignItems: 'center',
      marginBottom: '40px',
      marginLeft: side === 'left' ? '0px' : '0', // Shift the left box a bit more to the left
      // marginRight: side === 'right' ? '0px' : '90px', // Shift the right box a bit more to the right
      marginRight: '0px',
    });

    const entryContentStyle = {
      backgroundColor: 'transparent',
      color: 'blue',
      padding: '10px 20px',
      borderRadius: '5px',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      width: 'auto',
      // maxWidth: '40%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };

    const yearStyle = {
      display: 'block',
      color: 'white',
      // fontWeight: 'bold',
      marginBottom: '5px',
      background: 'transparent'
    };

    const entryMarkerStyle = {
      width: '24px',
      height: '24px',
      backgroundColor: '',
      border: '4px solid #074368',
      borderRadius: '50%',
      position: 'absolute',
      left: '50.18%',
      transform: 'translate(-50%, -50%)',
      background: 'black'
    };

    const imageStyle = {
      width: '500px',
      height: '350px',
      borderRadius: '10%',
      marginBottom: '10px',
    };

    const textContainerStyle = {
      backgroundColor: '#333',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      marginTop: '10px',
      textAlign: 'center',
      background: 'transparent'
    };

    const institutionStyle = {
      color: '#074368',
      fontWeight: 'bold',
      fontSize: '1em',
      marginBottom: '3px',
      background: ''
    };

    const degreeStyle = {
      color: 'white',
      fontSize: '0.9em',
      marginBottom: '2px',
      background: 'transparent'
    };

    const coursesStyle = {
      color: 'white',
      fontSize: '0.8em',
      marginBottom: '2px',
      background: 'transparent'
    };

    return (
      <section id="education">
        <div style={{ position: 'relative', width: '100%' }}>
          <h3 style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', color: 'white', fontSize: '27px', fontWeight: 'bold' }}>EDUCATION & WORK EXPERIENCE</h3>
          <div style={timelineStyle}>
            <div style={lineStyle}></div>
            {educationEntries.map((entry) => (
              <div key={entry.year} style={entryStyle(entry.side)}>
                <div style={entryContentStyle}>
                  <img src={entry.image} alt={entry.institution} style={imageStyle} />
                  <div style={textContainerStyle}>
                  <div style={institutionStyle}>{entry.institution}</div>
                    
                    <div style={degreeStyle}>{entry.degree}</div>
                    <span style={yearStyle}>{entry.year}</span>
                    <div style={coursesStyle}>{entry.courses}</div>
                  </div>
                </div>
                <div style={entryMarkerStyle}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default EducationSection;