import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as Close } from "../images/icon-close-menu.svg";
import { navContent } from "../content/content";
import { navButtons } from "../content/content";
import Button from "./Button";
import ListItem from "./ListItem";


const backdrop = {
  visible: { opacity: 1, x:0 },
  hidden: { opacity: 0, x:100 },
};

const Modal = ({ modal, closeModal }) => {
  const checkToClose = (e) => {
    if (e.target.id === "modal") {
      closeModal();
    }
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {modal && (
        <motion.div
          id="modal"
          className="fixed top-0 bottom-0 left-0 right-0 bg-neutral-800/70 flex justify-end z-50"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ type: 'spring', duration: 0.5 }}
          onClick={checkToClose}
        >
          <div className="bg-slate-50 w-[65vw] p-5 z-10 " id="menu">
            <div className="flex w-100 justify-end">
              <Close className="cursor-pointer" onClick={closeModal} />
            </div>
            <div className="my-5 flex flex-col items-start">
              {navContent.map((el, idx) => (
                <ListItem
                  key={idx}
                  text={el.text}
                  arrow={el.arrow}
                  childrens={el.childrens}
                />
              ))}
            </div>
            <div className="flex flex-col items-center w-100">
              <p className="text-gray-500 cursor-pointer py-3 flex items-center hover:text-black duration-300">
                {navButtons.login}
              </p>
              <Button reverse>{navButtons.register}</Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
