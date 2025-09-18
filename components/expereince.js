import { motion } from "framer-motion";
import { useState } from "react";
import { FaBriefcase, FaCalendar, FaCogs } from "react-icons/fa";

const experiences = [
    {
    title: "Software Engineer College Hire Program / Intern",
    company: "Depository Trust and Clearing Corporation (DTCC)",
    duration: "May 2025 - Present",
    description:
      "Contributing to the development of internal web applications using Angular and Java Spring Boot, collaborating in an Agile environment with cross-functional teams, and participating in code reviews and testing to ensure high-quality software delivery.",
    skills:
      "Java, Spring Boot, JavaScript, Angular, RESTful APIs, Agile Methodologies, Git, Jenkins, BitBucket",
  },
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
];

function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div 
      id="experience" 
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
            Experience
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional journey building innovative solutions and driving impact
          </motion.p>
        </div>

        {/* Experience timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div 
                className={`relative p-8 rounded-2xl border transition-all duration-300 bg-white hover:bg-gray-50 ${
                  hoveredIndex === index 
                    ? 'border-black shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300 ${
                  hoveredIndex === index ? 'bg-black' : 'bg-gray-300'
                }`} />
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg transition-all duration-300 ${
                        hoveredIndex === index ? 'bg-black' : 'bg-gray-100'
                      }`}>
                        <FaBriefcase className={`text-sm transition-colors duration-300 ${
                          hoveredIndex === index ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-black">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-xl font-semibold text-gray-700 mb-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm font-medium">
                    <FaCalendar className="text-xs" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                {/* Description */}
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>
                
                {/* Skills */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FaCogs className="text-gray-500 text-sm" />
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
                      Skills & Technologies
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.split(', ').map((skill, skillIndex) => (
                      <motion.span 
                        key={skillIndex}
                        className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 hover:border-gray-300 transition-all duration-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
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

export default Experience;