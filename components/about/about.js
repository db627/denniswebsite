import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function AboutMe() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      id="about" 
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
            radial-gradient(circle at 70% 20%, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 25%),
            radial-gradient(circle at 30% 70%, rgba(56, 189, 248, 0.4) 0%, rgba(56, 189, 248, 0) 25%)
          `
        }}
      ></div>

      {/* Light effect that follows mouse */}
      <motion.div 
        className="absolute rounded-full opacity-10"
        style={{
          width: "300px",
          height: "300px",
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          background: "radial-gradient(circle, rgba(56,189,248,0.8) 0%, rgba(168,85,247,0.4) 70%, rgba(168,85,247,0) 100%)",
          filter: "blur(40px)",
        }}
        animate={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20
        }}
      />

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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            color: "white",
            textShadow: "0 0 15px rgba(168, 85, 247, 0.3)"
          }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left side: About text */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="p-6 rounded-xl mb-6"
              style={{
                background: "rgba(30, 41, 59, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 15px 35px -20px rgba(0, 0, 0, 0.3)",
              }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(168, 85, 247, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a passionate web developer and problem solver with a background in Computing and Business.
                I enjoy building interactive and user-focused applications, with a keen interest in innovative technologies and seamless user experiences.
              </p>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-xl"
              style={{
                background: "rgba(30, 41, 59, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 15px 35px -20px rgba(0, 0, 0, 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(56, 189, 248, 0.2)" }}
            >
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: "rgba(168, 85, 247, 1)" }}
              >
                What I Do
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 mr-3"
                    style={{ backgroundColor: "rgba(56, 189, 248, 1)" }}
                  ></div>
                  <p className="text-gray-300">Develop responsive web applications</p>
                </li>
                <li className="flex items-start">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 mr-3"
                    style={{ backgroundColor: "rgba(56, 189, 248, 1)" }}
                  ></div>
                  <p className="text-gray-300">Create efficient database solutions</p>
                </li>
                <li className="flex items-start">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 mr-3"
                    style={{ backgroundColor: "rgba(56, 189, 248, 1)" }}
                  ></div>
                  <p className="text-gray-300">Design user-centered interfaces</p>
                </li>
                <li className="flex items-start">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 mr-3"
                    style={{ backgroundColor: "rgba(56, 189, 248, 1)" }}
                  ></div>
                  <p className="text-gray-300">Implement data analysis solutions</p>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          
          {/* Right side: Cards showing skills and education */}
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="p-6 rounded-xl"
              style={{
                background: "rgba(30, 41, 59, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 15px 35px -20px rgba(0, 0, 0, 0.3)",
              }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(168, 85, 247, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: "rgba(168, 85, 247, 1)" }}
              >
                Technical Skills
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="text-white mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Python', 'HTML', 'CSS', 'SQL', 'Java'].map((skill, index) => (
                      <span 
                        key={index}
                        className="text-sm px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "rgba(255, 255, 255, 0.9)",
                          border: "1px solid rgba(255, 255, 255, 0.1)"
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white mb-2">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Pandas', 'Flask', 'NextJS', 'MatplotLib'].map((skill, index) => (
                      <span 
                        key={index}
                        className="text-sm px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "rgba(255, 255, 255, 0.9)",
                          border: "1px solid rgba(255, 255, 255, 0.1)"
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Excel', 'Data Analysis', 'Power Bi', 'Office 365', 'IT Helpdesk'].map((skill, index) => (
                      <span 
                        key={index}
                        className="text-sm px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "rgba(255, 255, 255, 0.9)",
                          border: "1px solid rgba(255, 255, 255, 0.1)"
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-xl"
              style={{
                background: "rgba(30, 41, 59, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 15px 35px -20px rgba(0, 0, 0, 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(56, 189, 248, 0.2)" }}
            >
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: "rgba(168, 85, 247, 1)" }}
              >
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-white font-medium">B.S. in Computing and Business</h4>
                    <span className="text-sm text-blue-400">2022 - 2026</span>
                  </div>
                  <p className="text-gray-400">New Jersey Institute of Technology </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;