// // import React from "react";

// // const Footer = () => {
// //   return (
// //     <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
// //       <div className="container p-12 flex justify-between">
// //         <span>LOGO</span>
// //         <p className="text-slate-600">All rights reserved.</p>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// import React from "react";
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
//       <div className="container p-12 flex justify-between items-center">
//         <div className="flex items-center">
//           <Image
//             src="/images/Screenshot 2024-04-16 215603.png"
//             alt="Logo"
//             width={40}
//             height={40}
//             className="mr-2"
//           />
//           <span className="text-xl"></span>
//         </div>
//         <p className="text-slate-600">All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/Screenshot 2024-04-16 215603.png" // Renamed image for better clarity
            alt="Company Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl"></span> {/* Example text next to the logo */}
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
