// SideNav.jsx
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaCogs, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-scroll';

function SideNav() {
  return (
    <nav className="fixed md:top-1/2 md:left-4 md:transform md:-translate-y-1/2 bg-gray-800 bg-opacity-75 w-full md:w-14 h-auto py-2 md:py-4 md:rounded-full flex justify-around md:flex-col items-center shadow-lg bottom-0 md:bottom-auto">
      <NavItem to="hero" icon={<FaHome />} label="Home" />
      <NavItem to="experience" icon={<FaBriefcase />} label="Experience" />
      <NavItem to="about" icon={<FaUser />} label="About" />
      <NavItem to="projects" icon={<FaProjectDiagram />} label="Projects" />
      <NavItem to="skills" icon={<FaCogs />} label="Skills" />
      <NavItem href="/dennisboguslavskiyresume.pdf" icon={<FaFilePdf />} label="Resume" target="_blank" rel="noopener noreferrer" />
    </nav>
  );
}

function NavItem({ to, icon, label, href }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
      >
        {icon}
        <span className="sr-only">{label}</span> {/* For accessibility */}
      </a>
    );
  }

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
