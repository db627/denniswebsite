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
      <motion.div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn lg:hidden border-none hover:p-3 hover:border-dashed transform-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="teal"
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-teal bg-opacity-60 rounded-box w-52 text-teal-600"
              variants={navItemVariants}
              initial="hidden"
              animate="show"
            >
              <li className="hover:underline">
                <a href="/#about">About</a>
              </li>
              <li className="hover:underline">
                <a href="/blog">Blog</a>
              </li>
              <li className="hover:underline" href="/#contact">
                <a>Contact</a>
              </li>
            </motion.ul>
          </div>
          <a
            className="btn border-none hover:border-dashed hover:px-2 focus:border-dashed focus:px-2 duration-300 transition-all normal-case text-md pr-3 text-teal-600"
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
            <li className="hover:underline">
              <a href="#about">About Me</a>
            </li>
            <li className="hover:underline">
              <a href="/blog">Blog</a>
            </li>
            <li className="hover:underline">
              <a href="#contact">Contact</a>
            </li>
          </motion.ul>
        </div>
        <div className="navbar-end ">
          <a className="btn text-teal-600 text-md ml-10 border-none hover:border-dashed hover:px-2 focus:border-dashed focus:px-2 duration-300 transition-all" href="/resume">
            Resume
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
