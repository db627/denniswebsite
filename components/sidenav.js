// SideNav.jsx
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaCogs, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-scroll';

function SideNav() {
  return (
    <nav className="fixed top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 w-14 h-auto py-4 rounded-full flex-col items-center shadow-lg hidden md:flex">
      <NavItem to="hero" icon={<FaHome />} label="Home" />
      <NavItem to="experience" icon={<FaBriefcase />} label="Experience" />
      <NavItem to="about" icon={<FaUser />} label="About" />
      <NavItem to="projects" icon={<FaProjectDiagram />} label="Projects" />
      <NavItem to="skills" icon={<FaCogs />} label="Skills" />
      <NavItem href="/resume" icon={<FaFilePdf />} label="Resume" />
    </nav>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-70} // Adjust offset for fixed header
      className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
    >
      {icon}
      <span className="sr-only">{label}</span> {/* For accessibility */}
    </Link>
  );
}

export default SideNav;
