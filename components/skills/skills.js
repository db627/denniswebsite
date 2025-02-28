import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaPython, FaDatabase, FaGit } from 'react-icons/fa';
import { SiTailwindcss, SiFlask, SiMongodb, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  { 
    icon: <FaHtml5 />, 
    name: "HTML5",
    color: "#E34F26" 
  },
  { 
    icon: <FaCss3 />, 
    name: "CSS3",
    color: "#1572B6" 
  },
  { 
    icon: <FaJs />, 
    name: "JavaScript",
    color: "#F7DF1E" 
  },
  { 
    icon: <FaReact />, 
    name: "React",
    color: "#61DAFB" 
  },
  { 
    icon: <FaNode />, 
    name: "Node.js",
    color: "#339933" 
  },
  { 
    icon: <FaPython />, 
    name: "Python",
    color: "#3776AB" 
  },
  { 
    icon: <SiTailwindcss />, 
    name: "Tailwind CSS",
    color: "#06B6D4" 
  },
  { 
    icon: <SiFlask />, 
    name: "Flask",
    color: "#FFFFFF" 
  },
  { 
    icon: <FaDatabase />, 
    name: "SQL",
    color: "#4479A1" 
  },
  { 
    icon: <SiMongodb />, 
    name: "MongoDB",
    color: "#47A248" 
  },
  { 
    icon: <SiFirebase />, 
    name: "Firebase",
    color: "#FFCA28" 
  },
  { 
    icon: <FaGit />, 
    name: "Git",
    color: "#F05032" 
  }
];

function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div 
      id="skills" 
      className="py-20 px-8 relative"
      style={{
        background: "linear-gradient(to bottom, #1a1a2e 0%, #0f3460 100%)",
        overflow: "hidden"
      }}
    >
      {/* Background light effect */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(56, 189, 248, 0.4) 0%, rgba(56, 189, 248, 0) 20%),
            radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 20%)
          `
        }}
      ></div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      ></div>

      <motion.h2 
        className="text-4xl font-bold text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          color: "white",
          textShadow: "0 0 15px rgba(56, 189, 248, 0.3)"
        }}
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
            >
              {/* Circular background */}
              <motion.div 
                className="absolute w-24 h-24 rounded-full"
                style={{
                  background: hoveredIndex === index 
                    ? `radial-gradient(circle, rgba(30, 41, 59, 0.9) 0%, rgba(30, 41, 59, 0.7) 70%, rgba(30, 41, 59, 0) 100%)`
                    : `radial-gradient(circle, rgba(30, 41, 59, 0.7) 0%, rgba(30, 41, 59, 0.5) 70%, rgba(30, 41, 59, 0) 100%)`,
                  boxShadow: hoveredIndex === index 
                    ? `0 0 20px 5px rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.15)`
                    : 'none',
                  transform: `scale(${hoveredIndex === index ? 1.2 : 1})`,
                  transition: 'all 0.3s ease'
                }}
              />
              
              {/* Skill icon */}
              <motion.div 
                className="text-6xl z-10 mb-2"
                style={{
                  color: hoveredIndex === index ? skill.color : 'rgba(255, 255, 255, 0.7)',
                  filter: hoveredIndex === index ? `drop-shadow(0 0 8px rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.6))` : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {skill.icon}
              </motion.div>
              
              {/* Skill name with animated underline */}
              <div className="text-center relative">
                <p className="text-sm font-medium"
                   style={{
                     color: hoveredIndex === index ? skill.color : 'rgba(255, 255, 255, 0.7)',
                     transition: 'color 0.3s ease'
                   }}
                >
                  {skill.name}
                </p>
                {hoveredIndex === index && (
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-0.5 w-full"
                    style={{ background: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;