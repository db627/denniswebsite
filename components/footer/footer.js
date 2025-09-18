import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 text-center">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-black mb-4">Let's Connect</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to collaborate on something amazing? Let's build the future together.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a 
            href="https://www.linkedin.com/in/dennis-boguslavskiy/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 rounded-full border border-gray-200 text-gray-600 hover:text-black hover:border-black transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>
          <motion.a 
            href="https://github.com/db627" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 rounded-full border border-gray-200 text-gray-600 hover:text-black hover:border-black transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="text-2xl" />
          </motion.a>
          <motion.a 
            href="mailto:dennisboguslavskiy@gmail.com" 
            className="p-4 rounded-full border border-gray-200 text-gray-600 hover:text-black hover:border-black transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope className="text-2xl" />
          </motion.a>
        </motion.div>

        <motion.div 
          className="border-t border-gray-200 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 mono-text">
              © {new Date().getFullYear()} Dennis Boguslavskiy. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mono-text">
              Built with passion & code
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
