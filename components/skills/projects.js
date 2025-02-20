// Projects.jsx
import { motion } from 'framer-motion';
const projects = [
  {
    name: "Stock Predictor AI Project",
    description: "Machine learning-based stock predictor using Scikit-learn and live market data from Yahoo Finance.",
    link: "https://github.com/db627/machinelearning-stockticker"
  },
  {
    name: "Bank System Design at NJIT",
    description: "Designed a relational database system using MySQL and SQL to manage banking operations, including branches, customers, employees, accounts, and transactions.",
    link: ""
  },
  {
    name: "Diet App Website",
    description: "Developed a secure diet app with Flask, OpenAI API, Bootstrap, and SQL for personalized macro calculations and meal planning.",
    link: "https://github.com/db627/dietapp"
  },
  {
    name: "Consignment Management Platform for ByRaph",
    description: "Full-stack consignment management platform built with Next.js, Tailwind CSS, and Firebase, managing inventory, payments, and analytics.",
    link: "https://byraph.vercel.app"
  },
  {
    name: "RobinPy Stock Project",
    description: "Automated stock-monitoring tool using RobinStocks API, integrating moving average strategies and daily updates via Twilio API.",
    link: "https://github.com/db627/Robinpy"
  }
];

// Projects.jsx
function Projects() {
  return (
    <div id="projects" className="py-16 ">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg hover:scale-105 transition-transform" // Removed shadow-lg class
          >
            <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
            <a href={project.link} className="text-blue-400 hover:underline mt-2 block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

