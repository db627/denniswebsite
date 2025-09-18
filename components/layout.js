
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import App from './app';
import LoadingScreen from './LoadingScreen';

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">

      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10"
          >
            {children}
            <App />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}