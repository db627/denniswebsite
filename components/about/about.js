import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import Car from "/public/carimg22-scaled.jpg";
import Dennis from "/public/dennis-boguslavskiy.jpg"

export default function About() {
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [0.05, 0.2], ["100vh", "0vh"]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.9], [1, 1.1]);

  return (
    <motion.div
      className=" min-h-screen flex flex-col items-center justify-center text-white p-16 bg-black bg-opacity-20 "
      id="aboutsection"
      style={{ y: translateY, opacity }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start max-w-screen-lg mx-auto">
        <motion.div style={{ opacity }}>
          <motion.h1
            className="text-4xl md:text-6xl text-teal-400 font-semibold mb-8 tracking-wide"
            style={{ scale }}
          >
            My Story:
          </motion.h1>
          <motion.p
            className="text-xl md:text-lg"
            style={{ scale }}
          >
            I'm Dennis Boguslavskiy, a Computing and Business student at the New Jersey Institute of Technology, with a minor in Mobile and Web Development. Alongside my studies, I operate as a freelance website developer and social media marketer, applying my academic insights to real-world projects. My interests also encompass photography and spending time with loved ones. Emphasizing a data-driven approach and teamwork, I strive to foster growth and innovation in all my professional endeavors.
          </motion.p>
        </motion.div>
        <motion.div
          style={{ opacity, scale }}
        >
          <Image
            src={Dennis}
            alt="Dennis Boguslavskiy Image"
            className="border-4 border-white rounded-full overflow-hidden shadow-xl"
            width={400}
            height={400}
            objectFit="cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
