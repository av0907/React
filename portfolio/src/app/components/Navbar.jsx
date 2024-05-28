// // // "use client";
// // // import Link from "next/link";
// // // import React, { useState } from "react";
// // // import NavLink from "./NavLink";
// // // import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// // // import MenuOverlay from "./MenuOverlay";

// // // const navLinks = [
// // //   {
// // //     title: "About",
// // //     path: "#about",
// // //   },
// // //   {
// // //     title: "Projects",
// // //     path: "#projects",
// // //   },
// // //   {
// // //     title: "Certificates", // Add this new link
// // //     path: "/certificates", // Assuming 'certificates.jsx' is in the 'src/app' as per the Next.js pages structure
// // //   },
// // //   {
// // //     title: "Contact",
// // //     path: "#contact",
// // //   },
// // // ];

// // // const Navbar = () => {
// // //   const [navbarOpen, setNavbarOpen] = useState(false);

// // //   return (
// // //     <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
// // //       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
// // //         <Link
// // //           href={"/"}
// // //           className="text-2xl md:text-5xl text-white font-semibold"
// // //         >
// // //           LOGO
// // //         </Link>
// // //         <div className="mobile-menu block md:hidden">
// // //           {!navbarOpen ? (
// // //             <button
// // //               onClick={() => setNavbarOpen(true)}
// // //               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
// // //             >
// // //               <Bars3Icon className="h-5 w-5" />
// // //             </button>
// // //           ) : (
// // //             <button
// // //               onClick={() => setNavbarOpen(false)}
// // //               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
// // //             >
// // //               <XMarkIcon className="h-5 w-5" />
// // //             </button>
// // //           )}
// // //         </div>
// // //         <div className="menu hidden md:block md:w-auto" id="navbar">
// // //           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
// // //             {navLinks.map((link, index) => (
// // //               <li key={index}>
// // //                 <NavLink href={link.path} title={link.title} />
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //       </div>
// // //       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// // "use client";
// // import Link from "next/link";
// // import React, { useState } from "react";
// // import NavLink from "./NavLink";
// // import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// // import MenuOverlay from "./MenuOverlay";

// // const navLinks = [
// //   {
// //     title: "About",
// //     path: "#about",
// //   },
// //   {
// //     title: "Education",
// //     path: "#education", // Link to Education section
// //   },
// //   {
// //     title: "Skills",
// //     path: "#skills", // Link to Skills section
// //   },
// //   {
// //     title: "Projects",
// //     path: "#projects",
// //   },
// //   {
// //     title: "Certificates",
// //     path: "#certificates",
// //   },
// //   {
// //     title: "Contact",
// //     path: "#contact",
// //   },
// // ];

// // const Navbar = () => {
// //   const [navbarOpen, setNavbarOpen] = useState(false);

// //   return (
// //     <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
// //       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
// //         <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
// //           Image=
// //         </Link>
// //         <div className="mobile-menu block md:hidden">
// //           {!navbarOpen ? (
// //             <button
// //               onClick={() => setNavbarOpen(true)}
// //               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
// //             >
// //               <Bars3Icon className="h-5 w-5" />
// //             </button>
// //           ) : (
// //             <button
// //               onClick={() => setNavbarOpen(false)}
// //               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
// //             >
// //               <XMarkIcon className="h-5 w-5" />
// //             </button>
// //           )}
// //         </div>
// //         <div className="menu hidden md:block md:w-auto" id="navbar">
// //           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
// //             {navLinks.map((link, index) => (
// //               <li key={index}>
// //                 <NavLink href={link.path} title={link.title} />
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
// //     </nav>
// //   );
// // };

// // export default Navbar;


// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import NavLink from "./NavLink";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";
// import Image from "next/image";

// const navLinks = [
//   {
//     title: "About",
//     path: "#about",
//   },
//   {
//     title: "Education",
//     path: "#education",
//   },
//   {
//     title: "Skills",
//     path: "#skills",
//   },
//   {
//     title: "Projects",
//     path: "#projects",
//   },
//   {
//     title: "Certificates",
//     path: "#certificates",
//   },
//   {
//     title: "Contact",
//     path: "#contact",
//   },
// ];

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
//       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/images/Screenshot 2024-04-16 215603.png"
//             alt="Logo"
//             width={40}
//             height={40}
//             className="mr-2"
//           />
//           <span className="text-xl md:text-2xl text-white font-semibold" style = {{color:"#074368"}}>GNAN</span>
//         </Link>
//         <div className="mobile-menu block md:hidden">
//           {!navbarOpen ? (
//             <button
//               onClick={() => setNavbarOpen(true)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <Bars3Icon className="h-5 w-5" />
//             </button>
//           ) : (
//             <button
//               onClick={() => setNavbarOpen(false)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <XMarkIcon className="h-5 w-5" />
//             </button>
//           )}
//         </div>
//         <div className="menu hidden md:block md:w-auto" id="navbar">
//           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <NavLink href={link.path} title={link.title} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  // link details
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] border border-[#33353F]">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:py-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/Screenshot 2024-04-16 215603.png" alt="Logo" width={40} height={40} className="mr-2" />
          <span className="text-xl md:text-2xl font-semibold text-[#074368]">AVO</span>
        </Link>
        <div className="block md:hidden">
          <button
            aria-expanded={navbarOpen}
            aria-controls="navbar"
            aria-label="Toggle navigation"
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
