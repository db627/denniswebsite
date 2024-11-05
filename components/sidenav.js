// SideNav.jsx
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaCogs, FaFilePdf } from 'react-icons/fa';
import { useState } from 'react';

function SideNav() {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="fixed top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 w-14 h-auto py-4 rounded-full flex flex-col items-center shadow-lg hidden md:flex"> {/* 'hidden md:flex' hides it on mobile */}
      <NavItem href="#hero" icon={<FaHome />} label="Home" hovered={hovered} setHovered={setHovered} />
      <NavItem href="#experience" icon={<FaBriefcase />} label="Experience" hovered={hovered} setHovered={setHovered} />
      <NavItem href="#about" icon={<FaUser />} label="About" hovered={hovered} setHovered={setHovered} />
      <NavItem href="#projects" icon={<FaProjectDiagram />} label="Projects" hovered={hovered} setHovered={setHovered} />
      <NavItem href="#skills" icon={<FaCogs />} label="Skills" hovered={hovered} setHovered={setHovered} />
      <NavItem href="/resume" icon={<FaFilePdf />} label="Resume" hovered={hovered} setHovered={setHovered} />
    </nav>
  );
}

function NavItem({ href, icon, label, hovered, setHovered }) {
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(label)}
      onMouseLeave={() => setHovered(null)}
      className="relative group mb-6 text-gray-400 hover:text-white transition-colors duration-300 p-2"
    >
      {icon}
      {hovered === label && (
        <span className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {label}
        </span>
      )}
    </a>
  );
}

export default SideNav;
