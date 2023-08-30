import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projectList = [
  {
    name: "Personal Website",
    description:
      "A distinctive platform designed to showcase my diverse projects. This website is intricately crafted using Next.js, augmented with the real-time capabilities of Firebase. For styling, I've leveraged the power of Tailwind CSS, and to add interactive animations, I utilized Framer Motion. A blend of these advanced technologies culminates in a seamless user experience.",
    skills: "Next.js, Tailwind CSS, Firebase, Framer Motion, GitHub",
    githubLink: "https://dennisboguslavskiy.com/",
  },
  {
    name: "Blog Website",
    description:
      "Worked in a team to develop a blogging website that uses Next.js to render pages and Bootstrap 5 for styling. The website is hosted on GitHub Pages and is powered by the GitHub API. The website is fully responsive. The website is also integrated with Google Analytics for tracking. I used GitHub Actions to automate the deployment process.",
    skills: "Next.js, Bootstarp 5, GitHub, Git Collaboration, GitHub Actions",
    githubLink: "https://njit-wis.github.io/project-2-team-dennis-and-paul/",
  },
  {
    name: "RobinPy",
    description:
      "A stock-monitoring tool that stands as a testament to automation's power. Integrating Robinhood via the RobinStocks API, this Python-based application fetches daily standings of my stock portfolio. Moreover, through the Twilio API, it ensures I stay updated by sending daily predictions and standings for each stock directly to my phone. RobinPy simplifies stock tracking, making financial insights more accessible.",
    skills: "Python, RobinStocks API, Twilio API",
    githubLink: "",
  },
];

const projectsVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="py-16 text-white flex flex-col items-center"
      style={{ minHeight: "200px" }}
      transition={{ duration: 2 }}
      variants={projectsVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <h2 className="text-4xl font-bold mb-8 underline text-zinc-100 ">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center space-y-4 ">
        {projectList.map((project, index) => (
          <motion.div
            className="p-4 text-zinc-300 text-md font-semibold m-3 flex flex-col items-center w-64 bg-zinc-700  shadow-2xl mx-6 mobile:mx-10 rounded-2xl "
            style={{ width: "22rem" }}
            key={index}
            whileHover={{ scale: 1.1 }}
          >
            <span className="pb-2 text-zinc-200 underline ">{project.name}</span>
            <p className="text-center text-semibold">{project.description}</p>
            <p className="text-center font-normal text-md">{project.skills}</p>
            <a
              href={project.githubLink}
              className="mt-2 text-yellow-400 text-semibold hover:underline"
            >
              Github Link
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
