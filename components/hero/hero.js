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
      className="flex items-center justify-center p-8 rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-800 shadow-2xl mx-14 sm:mx-10 md:mx-10 lg:mx-10"
      style={{ height: "50em" }}
    >
      <div className="space-y-6 m-5 p-5">
        <motion.h1
          className="text-7xl font-bold text-white tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello! I am Dennis a{" "}
          <Typewriter
            options={{
              strings: [" Student!", " Software Dev!", " Web Dev!"],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.h1>
        <div className="flex space-x-4">
          <motion.button
            className="btn btn-primary text-white py-2 px-4 rounded text-lg font-semibold transition-colors hover:bg-teal-600 hover:text-white focus:bg-teal-600 focus:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#about">About Me</a>
          </motion.button>
          <motion.button
            className="btn btn-secondary text-slate-200 py-2 px-4 rounded text-lg font-semibold transition-colors hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#contact">Contact</a>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
