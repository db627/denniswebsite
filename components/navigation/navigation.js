import Link from "next/link";
import { motion } from "framer-motion";

const navItemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export default function Navigation() {
  return (
    <nav id="top" >
      <motion.div className="navbar " >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <motion.ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black bg-opacity-90 rounded-box w-52 text-teal-400"
              variants={navItemVariants}
              initial="hidden"
              animate="show"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a>Proejcts </a>
                <ul className="p-2">
                  <li>
                    <a>Project 1</a>
                  </li>
                  <li>
                    <a>Project 2</a>
                  </li>
                </ul>
              </li>
              <li href="#contact">
                <a>Contact</a>
              </li>
            </motion.ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl pr-3 text-teal-400" href="/">
            Dennis Boguslavskiy
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <motion.ul
            className="menu menu-horizontal px-1 text-teal-400"
            variants={navItemVariants}
            initial="hidden"
            animate="show"
          >
            <li>
              <a href="#about">About Me</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Projects</summary>
                <ul className="p-2">
                  <li>
                    <a>Blog Website</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </motion.ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-teal-400" href="/resume">Resume</a>
        </div>
      </motion.div>
    </nav>
  );
}
