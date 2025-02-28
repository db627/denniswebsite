import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: "Stock Predictor AI Project",
    description: "Machine learning-based stock predictor using Scikit-learn and live market data from Yahoo Finance.",
    link: "https://github.com/db627/machinelearning-stockticker",
    tags: ["Machine Learning", "Python", "Scikit-learn", "API"]
  },
  {
    name: "Bank System Design at NJIT",
    description: "Designed a relational database system using MySQL and SQL to manage banking operations, including branches, customers, employees, accounts, and transactions.",
    link: "",
    tags: ["MySQL", "SQL", "Database Design", "ERD"]
  },
  {
    name: "Diet App Website",
    description: "Developed a secure diet app with Flask, OpenAI API, Bootstrap, and SQL for personalized macro calculations and meal planning.",
    link: "https://github.com/db627/dietapp",
    tags: ["Flask", "Python", "OpenAI API", "Bootstrap"]
  },
  {
    name: "Consignment Management Platform for ByRaph",
    description: "Full-stack consignment management platform built with Next.js, Tailwind CSS, and Firebase, managing inventory, payments, and analytics.",
    link: "https://byraph.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Full-stack"]
  },
  {
    name: "RobinPy Stock Project",
    description: "Automated stock-monitoring tool using RobinStocks API, integrating moving average strategies and daily updates via Twilio API.",
    link: "https://github.com/db627/Robinpy",
    tags: ["Python", "API Integration", "Automation"]
  }
];

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div 
      id="projects" 
      className="py-20 px-8 relative"
      style={{
        background: "linear-gradient(to bottom, #0f3460 0%, #1a1a2e 100%)",
        overflow: "hidden"
      }}
    >
      {/* Background light effect */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.4) 0%, rgba(56, 189, 248, 0) 25%),
            radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 25%)
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
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="h-full rounded-xl overflow-hidden relative"
              style={{
                background: "rgba(30, 41, 59, 0.7)",
                backdropFilter: "blur(10px)",
                border: hoveredIndex === index 
                  ? "1px solid rgba(56, 189, 248, 0.3)" 
                  : "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease"
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px -20px rgba(56, 189, 248, 0.2)"
              }}
            >
              {/* Project card top accent */}
              <div 
                className="h-1 w-full"
                style={{
                  background: "linear-gradient(to right, rgba(56, 189, 248, 1), rgba(168, 85, 247, 1))",
                  opacity: hoveredIndex === index ? 1 : 0.7
                }}
              ></div>
              
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "rgba(255, 255, 255, 0.9)"
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-fit"
                    style={{
                      color: "rgba(56, 189, 248, 1)",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <span>View Project</span>
                    {project.link.includes('github') ? (
                      <FaGithub className="text-lg" />
                    ) : (
                      <FaExternalLinkAlt className="text-sm" />
                    )}
                  </a>
                ) : (
                  <span className="text-gray-500 italic">Private Project</span>
                )}
              </div>
              
              {/* Hidden overlay that appears on hover */}
              <motion.div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, rgba(56, 189, 248, 0) 70%)",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: "opacity 0.3s ease"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;