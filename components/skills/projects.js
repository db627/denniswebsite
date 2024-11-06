// Projects.jsx
import { motion } from 'framer-motion';
const projects = [
  { name: "Personal Website", description: "Built with Next.js and Tailwind CSS", link: "https://dennisboguslavskiy.com" },
  { name: "Blog Platform", description: "Collaborative project with NextJS and Bootsrap 5", link: "https://njit-wis.github.io/project-2-team-dennis-and-paul/" },
  { name: "RobinPy", description: "Stock-monitoring tool using RobinStocks API and Python", link: "https://github.com/db627/Robinpy" },
  // Add more projects here
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

