// Footer.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 py-6 text-center text-gray-400 mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.linkedin.com/in/dennis-boguslavskiy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaLinkedin size="1.5em" />
          </a>
          <a href="https://github.com/db627" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub size="1.5em" />
          </a>
          <a href="mailto:dennisboguslavskiy@gmail.com" className="hover:text-white transition-colors">
            <FaEnvelope size="1.5em" />
          </a>
        </div>
        <div className="border-t border-gray-700 my-4"></div>
        <p className="text-sm">
          © {new Date().getFullYear()} Dennis Boguslavskiy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
