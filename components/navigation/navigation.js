import Link from "next/link";
import { motion } from "framer-motion";

const navItemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: 'easeInOut'
    }
  },
}

export default function Navigation() {
  return (
    <motion.div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            variants={navItemVariants}
            initial="hidden"
            animate="show"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </motion.ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Dennis Boguslavskiy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <motion.ul className="menu menu-horizontal px-1" variants={navItemVariants} initial="hidden" animate="show">
          <li>
            <a>About Me</a>
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
            <a>Contact</a>
          </li>
        </motion.ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Resume</a>
      </div>
    </motion.div>
  );
}
