import { motion } from "framer-motion";

export default function Resumebody() {
  return (
    <motion.div
      className="flex flex-col w-full p-8 mx-auto bg-black bg-opacity-20 rounded-lg shadow-md font-mono text-teal-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col justify-between w-full mt-6 space-y-6 sm:flex-row sm:space-y-0 border-2 border-teal-300 rounded-lg py-3">
        <div className="flex items-center justify-start text-xl font-bold">
          <span className="ml-5">Dennis Boguslavskiy</span>
        </div>
        <div className="flex flex-col items-start justify-start">
          <span className="pr-3">dennisboguslavskiy@gmail.com</span>
          <span>
            <a href="https://www.linkedin.com/in/dennis-boguslavskiy/">
              LinkedIn
            </a>
          </span>
          <span>
            <a href="https://github.com/db627">GitHub</a>
          </span>
        </div>
      </div>
      <div className="px-6 mt-6">
        <div className="font-bold text-xl">Bio</div>
        <p className="mt-2">
          I am currently a student at NJIT studying Computing and Business and
          minoring in Mobile and Web Development! Outside of college I am a
          freelance web developer and social media marketer. I am data-driven
          and team-oriented and enjoy working in collaborative environments for
          personal and team growth.
        </p>
      </div>
      <div className="px-6 mt-6 border-2 border-teal-300 rounded-lg p-5">
        <div className="font-bold text-xl">Skills</div>
        <ul className="mt-2 space-y-2">
          {/* Add your skills here */}
          <li className="flex justify-between items-center">
            <span>Next.JS</span>
            <div className="w-64 h-2 bg-gray-600 rounded">
              <div
                className="h-full bg-teal-400 rounded"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span>React</span>
            <div className="w-56 h-2 bg-gray-600 rounded">
              <div
                className="h-full bg-teal-400 rounded"
                style={{ width: "30%" }}
              ></div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span>HTML, CSS, JavaScript</span>
            <div className="w-80 h-3 bg-gray-600 rounded">
              <div
                className="h-full bg-teal-400 rounded"
                style={{ width: "90%" }}
              ></div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span>Python</span>
            <div className="w-52 h-2 bg-gray-600 rounded">
              <div
                className="h-full bg-teal-400 rounded"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span>Java</span>
            <div className="w-48 h-2 bg-gray-600 rounded">
              <div
                className="h-full bg-teal-400 rounded"
                style={{ width: "50%" }}
              ></div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span>Google Analytics, MailChimp, Social Media Marketing</span>
            <div className="w-72 h-3 bg-gray-600 rounded">
              <div
                className="h-full bg-teal-400 rounded"
                style={{ width: "90%" }}
              ></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="px-6 mt-6">
        <div className="font-bold text-xl">Education</div>
        <div className="mt-2">
          <div className="font-semibold">
            New Jersey Institute of Technology
          </div>
          <div className="text-sm text-gray-600">
            Newark, NJ | BS in Computing and Business
          </div>
          <div>GPA: 3.7</div>
          <div>
            First year student that maintained Dean’s List during the Fall 2022
            and Spring 2023 semesters.
          </div>
          <div>
            Related Coursework: Roadmap to Computing, Introduction to Computer
            Science 1, Introduction to Website Development, Building Web
            Applications, Principles of Financial Accounting, Calculus 1
          </div>
        </div>
      </div>
      <div className="px-6 mt-6">
        <div className="font-bold text-xl">Experience</div>
        <div className="mt-2">
          <div className="font-semibold">Contractor – Stay Healthy Inc</div>
          <div className="text-sm text-gray-600">
            Webflow Web Developer | April 26, 2023 - Present
          </div>
          {/* Add your experience details here */}
        </div>
        <div className="mt-4">
          <div className="font-semibold">Freelancer – Gadya Media</div>
          <div className="text-sm text-gray-600">
            Website Development Dec 2022 – Present | Social Media Marketing Nov
            2021 - Present
          </div>
          {/* Add your experience details here */}
        </div>
        <div className="mt-4">
          <div className="font-semibold">Lifeguard – WALPOA</div>
          <div className="text-sm text-gray-600">
            Lifeguard | Dingmans Ferry, PA | June 2020 – Aug 2020 & June 2021 –
            Aug 2021
          </div>
          {/* Add your experience details here */}
        </div>
      </div>
      <div className="px-6 mt-6">
        <div className="font-bold text-xl">Projects</div>
        <div className="mt-2">
          <div className="font-semibold">MyWebClass.org</div>
          <div className="text-sm text-gray-600">
            Link: https://njit-wis.github.io/project-2-team-dennis-and-paul/
          </div>
          <div>
            Skills: Next.js, JavaScript, HTML, CSS, Bootstrap 5, Team
            Management, GitHub, Agile Project Management, Google Analytics,
            MailChimp, SEO
          </div>
          {/* Add your project details here */}
        </div>
      </div>
    </motion.div>
  );
}
