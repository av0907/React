// import React from "react";
// import NavLink from "./NavLink";

// const MenuOverlay = ({ links }) => {
//   return (
//     <ul className="flex flex-col py-4 items-center">
//       {links.map((link, index) => (
//         <li key={index}>
//           <NavLink href={link.path} title={link.title} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MenuOverlay;
import React from "react";
import PropTypes from "prop-types";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  if (!links.length) return <p>No navigation links available.</p>;

  return (
    <nav>
      <ul className="flex flex-col py-4 items-center">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

MenuOverlay.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired
};

export default MenuOverlay;
