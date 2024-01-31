import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: "HTML/CSS", level: 80 },
  { name: "Java", level: 60 },
  { name: "JavaScript", level: 40 },
  { name: "React", level: 55 },
  { name: "Next.js", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Bootstrap", level: 90 },
  { name: "Python", level: 70 },
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
      className=" py-16 text-white flex flex-col items-center font-mono"
      style={{ minHeight: "200px" }}
      transition={{ duration: 2 }}
      variants={skillsVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <h2 className="text-4xl font-bold font-mono mb-8 text-zinc-100 ">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center space-y-4 ">
        {skills.map((skill, index) => (
          <motion.div
            className="p-4 text-zinc-100 text-lg font-bold m-3 flex flex-col items-center w-64 bg-zinc-700 shadow-2xl mx-3 mobile:mx-10  "
            style={{ height: "10em", width: "10em" }}
            key={index}
            whileHover={{ scale: 1.1 }}
          >
            <span className="pb-2 text-zinc-100">{skill.name}</span>
            <div className="w-full h-3 bg-yellow-400 rounded">
              <div
                style={{ width: `${skill.level}%` }}
                className="h-full bg-blue-400 rounded"
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
