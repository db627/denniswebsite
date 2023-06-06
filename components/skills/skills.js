import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

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

const skillsVariants = {
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

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Triggers the animation only once
    threshold: 0.1, // 10% of the element is visible
  });

  return (
    <motion.div
      ref={ref}
      className=" py-16 text-white flex flex-col items-center"
      style={{ minHeight: '200px'}}
      transition={{ duration: 2 }}
      variants={skillsVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <motion.div
            className="p-4 rounded bg-transparent text-white text-lg font-bold m-8 flex flex-col items-center"
            key={index}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              width={40}
              height={40}
              className='pb-2'
            />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
