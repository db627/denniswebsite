import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Hero() {
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
      id="hero" 
      className="hero h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
      }}
    >
      {/* Animated light orbs */}
      <div className="absolute w-full h-full opacity-30">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${index * 20}%`,
              top: `${Math.random() * 80}%`,
              background: "radial-gradient(circle, rgba(56,189,248,0.8) 0%, rgba(168,85,247,0.4) 70%, rgba(168,85,247,0) 100%)",
              filter: "blur(40px)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Light effect that follows mouse */}
      <motion.div 
        className="absolute rounded-full opacity-20"
        style={{
          width: "400px",
          height: "400px",
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          background: "radial-gradient(circle, rgba(56,189,248,0.8) 0%, rgba(168,85,247,0.4) 70%, rgba(168,85,247,0) 100%)",
          filter: "blur(60px)",
        }}
        animate={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20
        }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      ></div>
      
      {/* Content with subtle glow */}
      <motion.div
        className="z-10 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1
          className="text-6xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            textShadow: "0 0 15px rgba(56, 189, 248, 0.3)"
          }}
        >
          <Typewriter words={['Dennis Boguslavskiy']} loop={false} cursor />
        </motion.h1>
        
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {['Student', 'Software Developer', 'Web Developer', 'Data Analyst', 'Problem Solver'].map((skill, index) => (
            <motion.span 
              key={index}
              className="px-4 py-2 text-gray-300 text-lg rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a 
            href="https://www.linkedin.com/in/dennis-boguslavskiy/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              transform: "translateY(0)",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 20px -10px rgba(56, 189, 248, 0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div 
              style={{
                padding: "12px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <FaLinkedin className="text-3xl text-blue-400" />
            </div>
          </a>
          <a 
            href="https://github.com/db627" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              transform: "translateY(0)",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 20px -10px rgba(255, 255, 255, 0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div 
              style={{
                padding: "12px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <FaGithub className="text-3xl text-white" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;