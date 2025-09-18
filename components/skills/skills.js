import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaPython, FaDatabase, FaGit, FaCogs } from 'react-icons/fa';
import { SiTailwindcss, SiFlask, SiMongodb, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useState } from 'react';

const skillCategories = {
  "Frontend": [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ],
  "Backend": [
    { icon: <FaNode />, name: "Node.js" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiFlask />, name: "Flask" },
  ],
  "Database": [
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiFirebase />, name: "Firebase" },
  ],
  "Tools": [
    { icon: <FaGit />, name: "Git" },
  ]
};

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div 
      id="skills" 
      className="py-24 px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-text text-gray-600 text-lg tracking-wider">
              skills
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Skills
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </div>

        {/* Skills grid by category */}
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-black rounded-lg">
                  <FaCogs className="text-white text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-black">{category}</h3>
                <div className="flex-1 h-px bg-gray-200 ml-4"></div>
              </div>

              {/* Skills in this category */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={`${category}-${index}`}
                    className="group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredSkill(`${category}-${index}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className={`relative p-6 rounded-2xl border transition-all duration-300 bg-white hover:bg-gray-50 ${
                      hoveredSkill === `${category}-${index}` 
                        ? 'border-black shadow-lg transform -translate-y-2' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      {/* Skill icon */}
                      <div className="text-center mb-4">
                        <div className={`inline-flex p-4 rounded-xl transition-all duration-300 ${
                          hoveredSkill === `${category}-${index}` 
                            ? 'bg-black text-white' 
                            : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                        }`}>
                          <div className="text-3xl">
                            {skill.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Skill name */}
                      <h4 className="text-center font-semibold text-gray-800 group-hover:text-black transition-colors duration-300">
                        {skill.name}
                      </h4>

                      {/* Hover effect line */}
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-black rounded-b-2xl"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: hoveredSkill === `${category}-${index}` ? '100%' : 0 
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="mono-text text-gray-600 text-lg tracking-wider">
            /skills
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;