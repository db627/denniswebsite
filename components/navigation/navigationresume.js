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
    <nav id="top">
      <motion.div className="navbar">
        <div className="shadow-lg navbar p-0">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn border-none focus:border-dashed focus:border-teal-600 focus:p-3 hover:border-dashed hover:border-teal-600 hover:p-3 transition-all duation-300 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black bg-opacity-90 rounded-box w-52 text-teal-600 "
              variants={navItemVariants}
              initial="hidden"
              animate="show"
            >
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#education">Educaton</a>
              </li>
              <li>
                <a href="#experience">Expereince</a>
              </li>
              <li href="#projects">
                <a>Projects</a>
              </li>
            </motion.ul>
          </div>
          <a
            className="btn btn-ghost rounded-none normal-case text-lg pr-3 text-teal-600 hover:rounded-xl hover:text-md hover:border-dashed transition-all duration-300"
            href="/"
          >
            Dennis B
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <motion.ul
            className="menu menu-horizontal px-1 text-teal-600"
            variants={navItemVariants}
            initial="hidden"
            animate="show"
          >
            <li className="hover:text-black transition-all duration-200">
              <a href="#skills ">Skills</a>
            </li>
            <li className="hover:text-black transition-all duration-200">
              <a href="#education">Educaton</a>
            </li>
            <li className="hover:text-black transition-all duration-200">
              <a href="#experience">Expereince</a>
            </li>
            <li href="#projects" className="hover:text-black transition-all duration-200">
              <a>Projects</a>
            </li>
          </motion.ul>
        </div>
        <div className="navbar-end ">
          <a className="btn text-teal-600 ml-10 border-none hover:rounded-xl hover:text-md hover:border-dashed transition-all duration-300" href="/resume">
            Resume
          </a>
        </div>
        </div>
      </motion.div>
    </nav>
  );
}
