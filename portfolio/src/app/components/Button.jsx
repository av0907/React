// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import GithubIcon from '/public/github-icon.svg'; // path to your Github icon
// import LinkedinIcon from '/public/linkedin-icon.svg'; // path to your Linkedin icon

// const SocialLinks = () => {
//   return (
//     <div className="social-links">
//       {/* GitHub Button */}
//       <Link href="https://github.com/Akshith2307" passHref>
//         <a target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//           <Image src={/public/github-icon.svg} alt="GitHub" width={24} height={24} />
//         </a>
//       </Link>

//       {/* LinkedIn Button */}
//       <Link href="https://www.linkedin.com/in/gnan-akshith-moyya/" passHref>
//         <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//           <Image src={/public/linkedin-icon.svg} alt="LinkedIn" width={24} height={24} />
//         </a>
//       </Link>
//     </div>
//   );
// };

// export default SocialLinks;
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SocialLinks = () => {
  return (
    <div className="social-links">
      {/* GitHub Button */}
      <Link href="https://github.com/av0907/React" passHref>
        <a target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Image src="/public/github-icon.svg" alt="GitHub" width={24} height={24} />
        </a>
      </Link>

      {/* LinkedIn Button */}
      <Link href="https://www.linkedin.com/in/aditya-vishnu-oruganti/" passHref>
        <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Image src="/public/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} />
        </a>
      </Link>
    </div>
  );
};

export default SocialLinks;
