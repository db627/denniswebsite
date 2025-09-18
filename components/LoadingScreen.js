import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const loadingPhases = [
    "Initializing quantum flux...",
    "Calibrating neural networks...",
    "Synthesizing digital essence...",
    "Materializing experience...",
    "Welcome to the future."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onLoadingComplete(), 1000);
          }, 800);
          return 100;
        }
        
        const newProgress = prev + Math.random() * 3 + 1;
        const phase = Math.floor((newProgress / 100) * loadingPhases.length);
        setCurrentPhase(Math.min(phase, loadingPhases.length - 1));
        
        return Math.min(newProgress, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const glitchVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, -2, 2, -1, 1, 0],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatDelay: 3,
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center animated-gradient"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Animated particles background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={particleVariants}
                animate="animate"
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>

          {/* Main loading container */}
          <motion.div
            className="relative z-10 text-center px-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo/Brand */}
            <motion.div
              className="mb-12"
              variants={glitchVariants}
              initial="initial"
              animate="animate"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-mono tracking-wider">
                DENNIS
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
            </motion.div>

            {/* Holographic loading circle */}
            <div className="relative mb-8">
              <svg className="w-32 h-32 mx-auto" viewBox="0 0 120 120">
                {/* Background circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                />
                
                {/* Progress circle */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{
                    pathLength: loadingProgress / 100,
                    rotate: -90,
                    transformOrigin: "center"
                  }}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: loadingProgress / 100 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                
                {/* Glowing dots */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45) * (Math.PI / 180);
                  const x = 60 + 50 * Math.cos(angle);
                  const y = 60 + 50 * Math.sin(angle);
                  return (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="2"
                      fill="white"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}

                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="50%" stopColor="#764ba2" />
                    <stop offset="100%" stopColor="#f093fb" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Percentage in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="text-2xl font-bold text-white mono-text"
                  key={Math.floor(loadingProgress)}
                  initial={{ scale: 0.8, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {Math.floor(loadingProgress)}%
                </motion.span>
              </div>
            </div>

            {/* Loading phase text */}
            <motion.div
              className="h-8 mb-6"
              key={currentPhase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white/80 text-lg mono-text tracking-wide">
                {loadingPhases[currentPhase]}
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-80 max-w-full mx-auto h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                style={{ width: `${loadingProgress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Pulse rings */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-white/10 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Neural network background effect */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              {[...Array(15)].map((_, i) => (
                <motion.line
                  key={i}
                  x1={`${Math.random() * 100}%`}
                  y1={`${Math.random() * 100}%`}
                  x2={`${Math.random() * 100}%`}
                  y2={`${Math.random() * 100}%`}
                  stroke="white"
                  strokeWidth="0.5"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;