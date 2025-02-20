// Experience.jsx
import { motion } from 'framer-motion';

const experiences = [
    { 
      title: "Software Development Intern", 
      company: "Merola Tile", 
      duration: "June 2024 - Jan 2025", 
      description: "Analyzed and tracked quarterly KPIs utilizing advanced Excel functions, providing clear insight into performance trends. Developed a Quality Control PO Web Application with Python, Flask, Linux, and JavaScript, reducing manual workloads and boosting efficiency. Assisted with day-to-day IT support operations, troubleshooting and resolving hardware and software issues. Implemented an IT asset management solution for 500+ inventory items, leveraging Linux, Apache2, and MySQL. Oversaw project research and deployment, coordinating strategies and timelines to achieve on-time deliverables.",
      skills: "Python, Flask, Linux, Apache2, MySQL, JavaScript, Excel, IT Support, Project Management"
    }
  ];
  { 
    title: "Python Development Intern", 
    company: "Premier Medical Lab", 
    duration: "09/2023 - 11/2023", 
    description: "I designed a custom Python GUI application to meet client needs using agile methods, developed features to query MySQL data and export it to Excel, utilized Tkinter and PyQt5 for an enhanced user experience, and implemented exception handling for reliable performance.",
    skills: "Software Development, Python, Agile Project Managment, Tkinter, SQL"
  },
  { 
    title: "Inventory Control Intern", 
    company: "Merola Tile", 
    duration: "07/2023 - 08/2023", 
    description: "I managed daily cycle counts using Excel and a warehouse management system, investigated inventory discrepancies through item log analysis, reported on counts, entered inventory adjustments, and supported special projects. My skills include Microsoft Excel, inventory analysis, data entry, teamwork, communication, Sage 300, and presentation skills.",
    skills: "Excel, Inventory Analysis, Data Analytics, Presentation Skills"

  },
  // Add more experiences here
];

function Experience() {
  return (
    <div id="experience" className="py-16 px-8 ">
      <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
      
      <div className="relative flex flex-col md:flex-row md:justify-center md:space-x-10">
        {/* Vertical Line */}
        <div className="hidden md:block w-1 md:w-1 h-full bg-gray-700 absolute left-8 top-0 bottom-0"></div>
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex items-start mb-10 md:mb-16 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Timeline Node */}
            <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-6 md:left-8"></div>
            
            {/* Experience Content */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg ml-12 md:ml-20 max-w-md">
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <span className="text-gray-500 text-sm">{exp.duration}</span>
              <p className="text-gray-300 mt-2">{exp.description}</p>
              <p className="text-gray-400 mt-2 font-bold text-sm">Skills: {exp.skills}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
