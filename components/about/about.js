import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import Dennis from "/public/dennis.png";

const aboutVariants = {
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

const imageVariants = {
  hover: {
    y: ["-2%", "2%"],
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Triggers the animation only once
    threshold: 0.1, // 10% of the element is visible
  });

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center text-white p-16 bg-black bg-opacity-20 "
      id="about"
      variants={aboutVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start max-w-screen-lg mx-auto">
        <motion.div>
          <motion.h1
            className="text-4xl md:text-6xl text-teal-400 font-semibold mb-8 tracking-wide"
          >
            My Story:
          </motion.h1>
          <motion.p className="text-xl md:text-lg">
            I'm Dennis Boguslavskiy, a Computing and Business student at the New
            Jersey Institute of Technology, with a minor in Mobile and Web
            Development. Alongside my studies, I operate as a freelance website
            developer and social media marketer, applying my academic insights
            to real-world projects. My interests also encompass photography and
            spending time with loved ones. Emphasizing a data-driven approach
            and teamwork, I strive to foster growth and innovation in all my
            professional endeavors.
          </motion.p>
        </motion.div>
        <motion.div
          variants={imageVariants}
          whileHover="hover"
        >
          <Image
            src={Dennis}
            alt="Dennis Boguslavskiy Image"
            className="border-4 border-teal-400 border-opacity-80 rounded-full overflow-hidden shadow-xl"
            width={400}
            height={400}
            objectFit="cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
