import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';

import Bootstrap from "/public/bootstrap.png";
import CSS from "/public/css.png";
import Framer from "/public/framermotion.png";
import HTML from "/public/html.png";
import Javascript from "/public/js.png";
import Next from "/public/nextjs.png";
import Tailwind from "/public/tailwind.png";
import Python from "/public/python.png"

const skills = [
  { name: "HTML", logo: HTML },
  { name: "CSS", logo: CSS },
  { name: "JavaScript", logo: Javascript },
  { name: "React", logo: Framer },
  { name: "Next.js", logo: Next },
  { name: "Tailwind CSS", logo: Tailwind },
  { name: "Bootstrap", logo: Bootstrap },
  { name: "Python", logo: Python },
];

const Skills = () => {
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [0.1, 0.4], ['100vh', '0vh']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <motion.div
      className=" py-16 text-white flex flex-col items-center"
      style={{ minHeight: '200px', y: translateY, opacity }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <motion.div
            className="p-4 rounded bg-transparent text-white text-lg font-bold m-10 flex flex-col items-center"
            key={index}
            style={{ opacity }}
            transition={{ delay: index * 0.1 }}
          >
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              width={72}
              height={72}
              className='pb-3'
            />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
