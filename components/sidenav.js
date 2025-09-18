import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaCogs, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-scroll';

function SideNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { to: 'hero', icon: FaHome, label: 'Home' },
    { to: 'experience', icon: FaBriefcase, label: 'Experience' },
    { to: 'about', icon: FaUser, label: 'About' },
    { to: 'projects', icon: FaProjectDiagram, label: 'Projects' },
    { to: 'skills', icon: FaCogs, label: 'Skills' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.to);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll(); // Set initial active section
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-1/2 left-6 transform -translate-y-1/2 z-50 hidden md:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="glass-effect rounded-2xl p-3 space-y-2">
          {navItems.map((item, index) => (
            <NavItem
              key={item.to}
              {...item}
              isActive={activeSection === item.to}
              index={index}
              showLabel={isHovered}
            />
          ))}
          
          <div className="border-t border-gray-200 pt-2 mt-2">
            <ExternalNavItem
              href="/dennisboguslavskiyresume.pdf"
              icon={FaFilePdf}
              label="Resume"
              showLabel={isHovered}
            />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="glass-effect rounded-2xl px-4 py-2">
          <div className="flex space-x-4">
            {navItems.map((item, index) => (
              <MobileNavItem
                key={item.to}
                {...item}
                isActive={activeSection === item.to}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}

function NavItem({ to, icon: Icon, label, isActive, index, showLabel }) {
  return (
    <motion.div
      className="relative group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link to={to} smooth={true} duration={800} offset={-50}>
        <motion.div
          className={`relative p-3 rounded-xl cursor-pointer transition-all duration-300 ${
            isActive 
              ? 'text-black bg-black/10' 
              : 'text-gray-600 hover:text-black hover:bg-black/5'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="text-lg" />
          
          {/* Active indicator */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-black rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </Link>

      {/* Label tooltip */}
      <AnimatePresence>
        {showLabel && (
          <motion.div
            className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="glass-effect px-3 py-1 rounded-lg text-sm font-medium text-black">
              {label}
              <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 rotate-45 bg-white border border-black/10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ExternalNavItem({ href, icon: Icon, label, showLabel }) {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-3 rounded-xl text-gray-600 hover:text-black hover:bg-black/5 transition-all duration-300"
      >
        <Icon className="text-lg" />
      </a>

      {/* Label tooltip */}
      <AnimatePresence>
        {showLabel && (
          <motion.div
            className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="glass-effect px-3 py-1 rounded-lg text-sm font-medium text-black">
              {label}
              <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 rotate-45 bg-white border border-black/10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MobileNavItem({ to, icon: Icon, isActive, index }) {
  return (
    <motion.div
      initial={{ scale: 0, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link to={to} smooth={true} duration={800} offset={-50}>
        <motion.div
          className={`relative p-3 rounded-xl cursor-pointer transition-all duration-300 ${
            isActive 
              ? 'text-black bg-black/10' 
              : 'text-gray-600'
          }`}
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="text-base" />
          
          {/* Active indicator dot */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default SideNav;
