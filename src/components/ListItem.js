import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const wrapper = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ListItem = ({ text, arrow, childrens }) => {
  const [isOpen, setOpen] = useState(false);
  const openHandle = () => setOpen(!isOpen);
  

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1023;

  const validateChildren = () => {
    if (isOpen && childrens) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      className="text-gray-500 py-2 w-full flex flex-col items-start cursor-pointer hover:text-black duration-300 lg:relative lg:px-4"
      onClick={isMobile ? openHandle : null}
      onMouseEnter={isMobile ? null : openHandle}
      onMouseLeave={isMobile ? null : () => {
        setTimeout(openHandle, 500);
      }}
    >
      <div className="flex items-center">
        {text}{" "}
        <motion.div animate={{ rotate: isOpen ? 180 : 0, x: isOpen ? 10 : 0 }}>
          {arrow}
        </motion.div>
      </div>
      {validateChildren() && (
        <motion.div
          id="modal"
          className="flex flex-col py-2 w-full justify-center mx-8 lg:shadow-xl lg:absolute lg:top-10 lg:left-0 lg:mx-0 rounded-lg z-50"
          variants={wrapper}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {childrens.map((el, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="flex lg:justify-start lg:px-4"
            >
              {el}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ListItem;
