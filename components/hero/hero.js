import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div 
      id="hero" 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16"
    >
      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        {/* Greeting text */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <span className="mono-text text-gray-600 text-lg tracking-wider font-medium">
            Hello, I'm
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none text-black"
        >
          <div className="relative">
            <Typewriter 
              words={['DENNIS']} 
              loop={false} 
              cursor={false}
              typeSpeed={100}
            />
            <motion.div
              className="text-4xl md:text-6xl lg:text-7xl mt-2 text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              BOGUSLAVSKIY
            </motion.div>
          </div>
        </motion.h1>

        {/* Subtitle with animated typing */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-3xl text-gray-600 mb-16 font-light"
        >
          <Typewriter
            words={[
              'Software Engineer',
              'Full-Stack Developer',
              'Data Scientist', 
              'Problem Solver',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.div>

        {/* Animated skills pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            { name: 'Java', icon: '⚛️' },
            { name: 'Python', icon: '🐍' },
            { name: 'JavaScript', icon: '🟨' },
            { name: 'Next.js', icon: '▲' },
            { name: 'AI/ML', icon: '🤖' },
            { name: 'Cloud', icon: '☁️' }
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="minimal-border px-6 py-3 rounded-full bg-white hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl mr-3">{skill.icon}</span>
              <span className="text-black font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.a
            href="https://www.linkedin.com/in/dennis-boguslavskiy/"
            className="group relative px-10 py-4 bg-black text-white rounded-full font-semibold transition-all duration-300 hover:bg-gray-800"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              <FaEnvelope />
              Let's Connect
            </span>
          </motion.a>

          <motion.a
            href="/dennisboguslavskiyresume.pdf"
            download
            className="group px-10 py-4 border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              <FaDownload className="group-hover:animate-bounce" />
              Download Resume
            </span>
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-8 justify-center"
        >
          {[
            { 
              icon: FaLinkedin, 
              href: "https://www.linkedin.com/in/dennis-boguslavskiy/",
              label: "LinkedIn"
            },
            { 
              icon: FaGithub, 
              href: "https://github.com/db627",
              label: "GitHub"
            }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-gray-200 text-gray-600 hover:text-black hover:border-black transition-all duration-300 group"
              whileHover={{ 
                scale: 1.1, 
                y: -2
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon className="text-2xl" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        
      </motion.div>
    </div>
  );
}

export default Hero;