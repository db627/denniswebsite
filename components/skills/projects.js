import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaCode } from 'react-icons/fa';

const projects = [
  {
    name: "Stock Predictor AI Project",
    description: "Machine learning-based stock predictor using Scikit-learn and live market data from Yahoo Finance.",
    link: "https://github.com/db627/machinelearning-stockticker",
    tags: ["Machine Learning", "Python", "Scikit-learn", "API"],
    type: "AI/ML"
  },
  {
    name: "Bank System Design at NJIT",
    description: "Designed a relational database system using MySQL and SQL to manage banking operations, including branches, customers, employees, accounts, and transactions.",
    link: "",
    tags: ["MySQL", "SQL", "Database Design", "ERD"],
    type: "Database"
  },
  {
    name: "Diet App Website",
    description: "Developed a secure diet app with Flask, OpenAI API, Bootstrap, and SQL for personalized macro calculations and meal planning.",
    link: "https://github.com/db627/dietapp",
    tags: ["Flask", "Python", "OpenAI API", "Bootstrap"],
    type: "Web App"
  },
  {
    name: "Consignment Management Platform for ByRaph",
    description: "Full-stack consignment management platform built with Next.js, Tailwind CSS, and Firebase, managing inventory, payments, and analytics.",
    link: "https://byraph.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Full-stack"],
    type: "Platform"
  },
  {
    name: "RobinPy Stock Project",
    description: "Automated stock-monitoring tool using RobinStocks API, integrating moving average strategies and daily updates via Twilio API.",
    link: "https://github.com/db627/Robinpy",
    tags: ["Python", "API Integration", "Automation"],
    type: "Automation"
  }
];

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div 
      id="projects" 
      className="py-24 px-8 bg-white"
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
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Projects
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of projects showcasing my development skills and problem-solving approach
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div 
                className={`relative h-full p-8 rounded-2xl border transition-all duration-300 bg-white hover:bg-gray-50 ${
                  hoveredIndex === index 
                    ? 'border-black shadow-xl transform -translate-y-2' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project type badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    hoveredIndex === index 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <FaFolder className="text-xs" />
                    <span>{project.type}</span>
                  </div>
                  
                  <div className={`p-2 rounded-lg transition-all duration-300 ${
                    hoveredIndex === index ? 'bg-black' : 'bg-gray-100'
                  }`}>
                    <FaCode className={`text-lg transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                </div>

                {/* Project name */}
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {project.name}
                </h3>
                
                {/* Project description */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project link */}
                <div className="flex items-center justify-between">
                  {project.link ? (
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black font-semibold hover:text-gray-700 transition-colors duration-300"
                      whileHover={{ x: 4 }}
                    >
                      <span>View Project</span>
                      {project.link.includes('github') ? (
                        <FaGithub className="text-lg" />
                      ) : (
                        <FaExternalLinkAlt className="text-sm" />
                      )}
                    </motion.a>
                  ) : (
                    <span className="text-gray-500 italic font-medium">Private Project</span>
                  )}
                </div>

                {/* Hover accent line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-black rounded-b-2xl"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: hoveredIndex === index ? '100%' : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
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
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;