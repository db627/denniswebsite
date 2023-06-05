import { motion } from "framer-motion";
import Image from "next/image";
import Car from "/public/carimg22-scaled.jpg";

import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const imageVariants = {
    hover: {
      scale: [1, 1.1, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  /*
  <motion.div
        className="w-72 h-88 rounded-full overflow-hidden shadow-lg border-4 border-white"
        variants={imageVariants}
        whileHover="hover"
      >
        <Image
          src={Car}
          alt="Dennis Boguslavskiy Image"
          width={450}
          height={450}
          objectFit="contain"
        />
      </motion.div>
  */
  return (
    <section
      className="flex items-center justify-center p-8"
      style={{ height: "30em" }}
    >

      <div className="space-y-6 m-5 p-5">
        <motion.h1
          className="text-6xl font-bold text-teal-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello! I am Dennis{" "}
          <Typewriter
            options={{
              strings: ["a Student!", "a Software Engineer!", "a Web Developer!"],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.h1>
        <div className="flex space-x-4">
          <motion.button
            className="btn btn-primary text-teal-600 py-2 px-4 rounded text-lg font-semibold transition-colors hover:bg-teal-600 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#aboutsection"
          >
            About Me
          </motion.button>
          <motion.button
            className="btn btn-secondary text-slate-500 py-2 px-4 rounded text-lg font-semibold transition-colors hover:bg-slate-500 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
