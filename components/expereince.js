import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    title: "IT Intern",
    company: "Merola Tile",
    duration: "June 2024 - Jan 2025",
    description:
      "Analyzed and tracked quarterly KPIs utilizing advanced Excel functions, providing clear insight into performance trends. Developed a Quality Control PO Web Application with Python, Flask, Linux, and JavaScript, reducing manual workloads and boosting efficiency. Assisted with day-to-day IT support operations, troubleshooting and resolving hardware and software issues. Implemented an IT asset management solution for 500+ inventory items, leveraging Linux, Apache2, and MySQL. Oversaw project research and deployment, coordinating strategies and timelines to achieve on-time deliverables.",
    skills:
      "Python, Flask, Linux, Apache2, MySQL, JavaScript, Excel, IT Support, Project Management",
  },
  {
    title: "Python Development Intern",
    company: "Premier Medical Lab",
    duration: "09/2023 - 11/2023",
    description:
      "I designed a custom Python GUI application to meet client needs using agile methods, developed features to query MySQL data and export it to Excel, utilized Tkinter and PyQt5 for an enhanced user experience, and implemented exception handling for reliable performance.",
    skills:
      "Software Development, Python, Agile Project Managment, Tkinter, SQL",
  },
  {
    title: "Inventory Control Intern",
    company: "Merola Tile",
    duration: "07/2023 - 08/2023",
    description:
      "I managed daily cycle counts using Excel and a warehouse management system, investigated inventory discrepancies through item log analysis, reported on counts, entered inventory adjustments, and supported special projects. My skills include Microsoft Excel, inventory analysis, data entry, teamwork, communication, Sage 300, and presentation skills.",
    skills: "Excel, Inventory Analysis, Data Analytics, Presentation Skills",
  },
  // Add more experiences here
];

function Experience() {
  // Card hover state
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div 
      id="experience" 
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
            radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.4) 0%, rgba(56, 189, 248, 0) 25%),
            radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 25%)
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
        Experience
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        {/* Simple card layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="w-full rounded-xl overflow-hidden"
              style={{
                background: "rgba(30, 41, 59, 0.7)",
                backdropFilter: "blur(10px)",
                border: hoveredIndex === index 
                  ? "1px solid rgba(56, 189, 248, 0.3)" 
                  : "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: hoveredIndex === index 
                  ? "0 20px 40px -20px rgba(56, 189, 248, 0.2)" 
                  : "0 15px 35px -20px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease"
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -5 }}
            >
              <div className="p-8 relative">
                {/* Left highlight accent */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{
                    background: "linear-gradient(to bottom, rgba(56, 189, 248, 1), rgba(168, 85, 247, 1))",
                    opacity: hoveredIndex === index ? 1 : 0.7
                  }}
                ></div>
                
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.title}</h3>
                    <p 
                      className="text-xl font-medium"
                      style={{ color: "rgba(168, 85, 247, 1)" }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span 
                    className="text-sm py-1 px-4 rounded-full self-start"
                    style={{
                      background: "rgba(56, 189, 248, 0.15)",
                      color: "rgba(56, 189, 248, 1)",
                      border: "1px solid rgba(56, 189, 248, 0.3)",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {exp.duration}
                  </span>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider mb-3 text-gray-400 font-semibold">Skills & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.split(', ').map((skill, skillIndex) => (
                      <motion.span 
                        key={skillIndex}
                        className="text-sm px-3 py-1 rounded-full mb-2"
                        style={{
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "rgba(255, 255, 255, 0.9)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          transition: "all 0.2s ease"
                        }}
                        whileHover={{ 
                          y: -2, 
                          backgroundColor: "rgba(56, 189, 248, 0.15)",
                          color: "rgba(56, 189, 248, 1)"
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;