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

      /*
      <Typewriter
            options={{
              strings: [" Student!", " Software Dev!", " Web Dev!", "Data Analyst!"],
              autoStart: true,
              loop: true,
            }}
          />
      */
     /*
     bg-gradient-to-br from-zinc-600 to-zinc-800 shadow-2xl
     */
  return (
    <section
      className="flex items-center justify-center p-3"
      style={{ height: "50em" }}
    >
      <div className="space-y-6 m-5 p-auto">
        <motion.h1
          className="text-6xl text-white font-mono" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.5 }}
          transition={{ delay: 0.2, duration: 2 }}
        >
          Hello! I am Dennis
        </motion.h1>
        <motion.h1 className="text-white text-4xl font-mono "initial={{ opacity: 0 }}
          animate={{ opacity: 1.5 }}
          transition={{ delay: 0.2, duration: 2}}>
          Student. Web Developer. Software Dev. Data Analyst
        </motion.h1>
        <div className="flex space-x-4">
          <motion.button
            className="btn btn-primary text-yellow-400 py-2 px-4 rounded text-lg font-semibold transition-colors hover:bg-teal-600 hover:text-white focus:bg-teal-600 focus:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#about">About Me</a>
          </motion.button>
          <motion.button
            className="btn btn-secondary text-blue-400 py-2 px-4 rounded text-lg font-semibold transition-colors hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#contact">Contact Me</a>
          </motion.button>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
