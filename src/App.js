import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";

function App() {
  const [modal, setModal] = useState(false);
  const modalHandle = () => setModal(!modal);
  // console.log(modal)

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-full h-screen flex flex-col ">
        <Navbar closeModal={modalHandle} />
        <Modal modal={modal} closeModal={modalHandle} />
        <div className="mx-auto container flex lg:justify-center h-full">
          <Main />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
