// Experience.jsx
import { motion } from 'framer-motion';

const experiences = [
  { 
    title: "IT Intern", 
    company: "Merola Tile", 
    duration: "09/2024 - Present", 
    description: "Responsible for maintaining and troubleshooting IT infrastructure and providing support to staff."
  },
  { 
    title: "Python Development Contractor", 
    company: "Premier Medical Lab", 
    duration: "09/2023 - 10/2023", 
    description: "Developed automated scripts for data processing and reporting, improving data handling efficiency by 40%."
  },
  { 
    title: "Inventory Control Intern", 
    company: "Merola Tile", 
    duration: "07/2023 - 08/2023", 
    description: "Streamlined inventory tracking processes and assisted in implementing an efficient warehouse system."
  },
  // Add more experiences here
];

function Experience() {
  return (
    <div id="experience" className="py-16 px-8 bg-gradient-to-br from-gray-800 to-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
      <div className="flex flex-col items-center">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-6 rounded-lg shadow-lg w-3/4 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-gray-400">{exp.company}</p>
            <span className="text-gray-500 text-sm">{exp.duration}</span>
            <p className="text-gray-300 mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
