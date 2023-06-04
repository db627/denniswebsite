import { motion } from "framer-motion";
import Image from "next/image";

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

  return (
    <section
      className="flex items-center p-8 justify-center "
      style={{ height: "50em", backgroundColor: "#212938" }}
    >
      <motion.div
        className="w-64 h-64 rounded-full overflow-hidden shadow-lg"
        variants={imageVariants}
        whileHover="hover"
      >
        <Image
          src="" // replace with your image path
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      <div className="space-y-4 m-5 p-5 ">
        <motion.h1
          className="text-6xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello! I am Dennis {" "}
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
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
