import { Link } from "react-router-dom";
import logo from "../../assets/Img/logo.png";
import { PAGE_URL } from "../../Utils/Constant";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navList = ["Home", "About", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navListVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };

  return (
    <nav className="fixed w-full top-5 z-40">
      <div className="container mx-auto flex justify-between items-center h-24 px-4">
        <Link to={PAGE_URL.HOME}>
          <button className="max-w-24">
            <img src={logo} alt="" />
          </button>
        </Link>
        <div className="hidden md:flex">
          <ul className="flex gap-4 cursor-pointer">
            {navList.map((item, i) => (
              <li
                key={i}
                className="text-lg font-semibold hover:bg-black hover:text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out"
              >
                <Link to={PAGE_URL[item.toUpperCase()]}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          onClick={toggleMenu}
          className="md:hidden group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-transparent p-2"
          animate={{ rotate: isOpen ? 0 : 180 }} // Rotate icon conditionally
          transition={{ type: "spring", stiffness: 260, damping: 20 }} // Use spring animation with specified stiffness and damping
        >
          {isOpen ? <FaTimes size={25} className="text-black" /> : <FaBars size={25} className="text-black" />}
        </motion.div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden py-4"
          initial="hidden"
          animate={isOpen ? "visible" : "exit"}
          variants={navListVariants}
        >
          <ul className="flex flex-col items-center gap-4">
            {navList.map((item, i) => (
              <li
                key={i}
                className="text-lg font-semibold hover:bg-black hover:text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out"
              >
                <Link to={PAGE_URL[item.toUpperCase()]} onClick={toggleMenu}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
