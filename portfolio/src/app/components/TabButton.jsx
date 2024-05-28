// import React from "react";
// import { motion } from "framer-motion";

// const variants = {
//   default: { width: 0 },
//   active: { width: "calc(100% - 0.75rem)" },
// };

// const TabButton = ({ active, selectTab, children }) => {
//   const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

//   return (
//     <button onClick={selectTab}>
//       <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
//         {children}
//       </p>
//       <motion.div
//         animate={active ? "active" : "default"}
//         variants={variants}
//         className="h-1 bg-primary-500 mt-2 mr-3"
//       ></motion.div>
//     </button>
//   );
// };

// export default TabButton;
import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },  // Ensure this calculation suits your design requirements
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button
      type="button"
      onClick={selectTab}
      aria-label={`Tab for ${children}`}  // Assumes `children` is descriptive of the tab's purpose
      className="focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
    >
      <span className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </span>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      />
    </button>
  );
};

export default TabButton;
