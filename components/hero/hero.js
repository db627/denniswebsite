// Hero.jsx
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Hero() {
  return (
    <div id="hero" className="hero bg-gradient-to-br from-gray-800 to-gray-900 h-screen flex flex-col items-center justify-center text-center">
      <motion.h1
        className="text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typewriter words={['Dennis Boguslavskiy']} loop={false} cursor />
      </motion.h1>
      <p className="text-gray-300 text-lg mb-8">Web Developer, Problem Solver, Innovator</p>
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/dennis-boguslavskiy/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-blue-500 hover:scale-110 transition-transform duration-200" />
        </a>
        <a href="https://github.com/db627" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-white hover:scale-110 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
