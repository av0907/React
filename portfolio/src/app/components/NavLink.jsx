// // import Link from "next/link";

// // const NavLink = ({ href, title }) => {
// //   return (
// //     <Link
// //       href={href}
// //       className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
// //     >
// //       {title}
// //     </Link>
// //   );
// // };

// // export default NavLink;
// import Link from "next/link";

// const NavLink = ({ href, title }) => {
//   return (
//     <Link
//       href={href}
//       className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
//     >
//       {title}
//     </Link>
//   );
// };

// export default NavLink;

import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, title }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} passHref>
      <a
        className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white ${isActive ? "text-white bg-[#33353F]" : ""}`}
        aria-label={title}
      >
        {title}
      </a>
    </Link>
  );
};

export default NavLink;
