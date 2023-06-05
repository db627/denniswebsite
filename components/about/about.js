import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import Car from "/public/carimg22-scaled.jpg";

export default function About() {
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [0.05, 0.2], ["100vh", "0vh"]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.9], [1, 1.1]);

  return (
    <motion.div
      className=" min-h-screen flex flex-col items-center justify-center text-white p-16 bg-black bg-opacity-20"
      style={{ y: translateY, opacity }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start max-w-screen-lg mx-auto">
        <motion.div style={{ opacity }}>
          <motion.h1
            className="text-4xl md:text-6xl text-teal-400 font-semibold mb-8 tracking-wide"
            style={{ scale }}
          >
            About Me:
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-medium"
            style={{ scale }}
          >
            I am a student at the New Jersey Institute of Technology as well as
            a web developer and aspiring software engineer.
          </motion.p>
        </motion.div>
        <motion.div
          style={{ opacity, scale }}
        >
          <Image
            src={Car}
            alt="Dennis Boguslavskiy Image"
            className="border-4 border-white rounded-lg overflow-hidden shadow-xl"
            width={400}
            height={400}
            objectFit="cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
