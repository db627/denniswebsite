import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import Dennis from "/public/dennis.png";

const aboutVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  hover: {
    scale: [1, 1.1],
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-white p-5 bg-gradient-to-br  "
      // rounded-2xl shadow-2xl mx-14 my-6
      id="about"
      variants={aboutVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <motion.h1 className="text-4xl md:text-6xl text-zinc-100 font-semibold font-mono mb-8 tracking-wide rounded-xl ">
        About Me:
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center max-w-screen-lg mx-auto p-4">
        <motion.div className="prose prose-lg md:prose-xl text-white">
          <motion.ul className="list-disc text-zinc-100 font-semibold text-xl">
            <li>
              Computing and Business student at the New Jersey Institute of
              Technology
            </li>
            <li>Minor in Mobile and Web Development</li>
            <li>Freelance website developer and social media marketer</li>
            <li>Applies academic insights to real-world projects</li>
            <li>Interested in photography and spending time with loved ones</li>
            <li>
              Emphasizes a data-driven approach and teamwork in professional
              endeavors
            </li>
            <li>Strives to foster growth and innovation in all projects</li>
          </motion.ul>
        </motion.div>
        <motion.div
          className="flex justify-center"
          variants={imageVariants}
          whileHover="hover"
        >
          <Image
            src={Dennis}
            alt="Dennis Boguslavskiy Image"
            className="border-4 border-yellow-400 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 opacity-0"
            style={{ height: "auto", width: "20rem" }}
            width={350}
            height={350}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
