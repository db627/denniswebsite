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
        <div className="navbar-start text-center">
          <a
            className="btn btn-ghost normal-case text-xl pr-3 text-teal-900 text-center"
            href="/"
          >
            Dennis B
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
