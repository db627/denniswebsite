// Skills.jsx
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaPython, FaMicrosoft } from 'react-icons/fa';
import { motion } from 'framer-motion';
const skills = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3 />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNode />, name: "Node.js" },
  { icon: <FaPython />, name: "Python"},

];

// Skills.jsx
// Skills.jsx
function Skills() {
  return (
    <div id="skills" className="py-16 ">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center"> {/* Responsive grid */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-5xl text-gray-300 hover:text-blue-400 transition-colors duration-200 flex flex-col items-center"
          >
            {skill.icon}
            <p className="text-sm mt-2 text-gray-400">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;


