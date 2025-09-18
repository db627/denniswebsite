import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { StaggeredContainer, FloatingCard } from "../ScrollAnimations";
import { FaCode, FaGraduationCap, FaBrain, FaRocket } from "react-icons/fa";

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

  const skills = {
    languages: ['JavaScript', 'Python', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'Java'],
    frameworks: ['Angular', 'Next.js', 'Node.js', 'Flask', 'Pandas', 'TailwindCSS', 'Spring Boot'],
    tools: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Figma']
  };

  return (
    <div 
      id="about" 
      className="relative py-24 px-8 overflow-hidden bg-gray-50"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <StaggeredContainer className="text-center mb-16">
          <motion.div className="inline-block mb-4">
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-black">
            About Me
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences that bridge innovation and functionality
          </p>
        </StaggeredContainer>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side: Story & Philosophy */}
          <StaggeredContainer className="space-y-8">
            <FloatingCard className="glass-effect p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-black mr-4">
                  <FaBrain className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">My Journey</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I'm a Computing and Business student at NJIT, passionate about creating innovative web applications 
                that solve real-world problems. My journey combines technical expertise with business acumen, 
                enabling me to build solutions that are both functionally robust and commercially viable.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                I thrive on transforming complex challenges into elegant, user-friendly experiences that make a difference.
              </p>
            </FloatingCard>

            <FloatingCard className="glass-effect p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-black mr-4">
                  <FaRocket className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">What Drives Me</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Full-Stack Development',
                  'Data Science & Analytics', 
                  'User Experience Design',
                  'Problem-Solving Innovation'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </FloatingCard>
          </StaggeredContainer>

          {/* Right side: Skills & Education */}
          <StaggeredContainer className="space-y-8">
            <FloatingCard className="glass-effect p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-black mr-4">
                  <FaCode className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Technical Arsenal</h3>
              </div>
              
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold text-black mb-3 capitalize mono-text">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-all duration-300 cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FloatingCard>

            <FloatingCard className="glass-effect p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-black mr-4">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Education & Growth</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-black pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-black"></div>
                  <h4 className="text-xl font-semibold text-black mb-2">
                    B.S. Computing and Business
                  </h4>
                  <p className="text-gray-600 font-medium mono-text">
                    New Jersey Institute of Technology
                  </p>
                  <p className="text-gray-500 text-sm">2022 - 2026</p>
                </div>
                
                <div className="mt-6 p-4 bg-gray-100 rounded-xl border border-gray-200">
                  <p className="text-gray-700 text-sm">
                    <span className="text-black font-semibold">Focus Areas:</span> Software Engineering, 
                    Database Systems, Business Analytics, Project Management
                  </p>
                </div>
              </div>
            </FloatingCard>
          </StaggeredContainer>
        </div>

        {/* Bottom section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;