import { motion } from "framer-motion";

export default function Resumebody() {
  return (
    <motion.div
      className="flex flex-col w-full p-8 mx-auto shadow-md font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col justify-between w-full mt-6 space-y-6 sm:flex-row sm:space-y-0 border-2 border-black shadow-lg rounded-lg p-3">
        <div className="flex items-center justify-start text-xl font-bold text-zinc-300">
          <span className="ml-1">Dennis Boguslavskiy</span>
        </div>
        <div className="flex flex-col items-start justify-start text-zinc-300">
          <span className="pr-3">dennisboguslavskiy@gmail.com</span>
          <span>
            <a
              href="https://www.linkedin.com/in/dennis-boguslavskiy/"
              className="hover:text-lg hover:font-semibold focus:text-lg focus:font-semibold transition-all duration-300"
            >
              LinkedIn
            </a>
          </span>
          <span>
            <a
              href="https://github.com/db627"
              className="hover:text-lg hover:font-semibold focus:text-lg focus:font-semibold transition-all duration-300"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
      <div className="px-6 mt-6 ">
        <div className="font-bold text-xl text-zinc-300">Bio</div>
        <p className="mt-2">
          I am currently a student at NJIT studying Computing and Business and
          minoring in Mobile and Web Development! Outside of college I am a
          freelance web developer and social media marketer. I am data-driven
          and team-oriented and enjoy working in collaborative environments for
          personal and team growth.
        </p>
      </div>
      <div className="px-6 mt-6 border-2 border-black shadow-lg rounded-lg p-5">
        <div className="font-bold text-xl" id="skills">
          Skills
        </div>
        <ul className="mt-2 space-y-2">
          {/* Add your skills here */}
          <li className="flex justify-between items-center">
            <span>Next.JS</span>
            <div className="w-64 bg-gray-600 rounded h-1.5">
              <div
                className="h-full bg-teal-400 rounded"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span>React</span>
            <div className="w-64 bg-gray-600 rounded h-1.5">
              <div className="h-full bg-teal-400 rounded w-1/2"></div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span>HTML, CSS, JavaScript</span>
            <div className="w-64 bg-gray-600 rounded h-1.5">
              <div className="h-full bg-teal-400 rounded transition-all duration-300 w-4/5"></div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span>Python</span>
            <div
              className="w-64 h-1.5 bg-gray-600 rounded"
              style={{ height: ".5 em" }}
            >
              <div className="h-full bg-teal-400 rounded w-3/4"></div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span>Java</span>
            <div className="w-64 h-1.5 bg-gray-600 rounded">
              <div className="h-full bg-teal-400 rounded w-1/2"></div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span>Google Analytics, Meta Business, Social Media Marketing</span>
            <div className="w-64 h-1.5 bg-gray-600 rounded">
              <div
                className="h-full bg-teal-400 rounded"
                style={{ width: "90%" }}
              ></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="px-6 mt-6">
        <div className="font-bold text-xl" id="education">
          Education
        </div>
        <div className="mt-2">
          <div className="font-semibold">
            New Jersey Institute of Technology
          </div>
          <div className="text-sm text-zinc-400">
            Newark, NJ | BS in Computing and Business
          </div>
          <div></div>
          <div>
            Second year student that maintained Dean’s List during the Fall 2022
            and Spring 2023 semesters.
          </div>
          <div>
            Related Coursework: Roadmap to Computing, Introduction to Computer
            Science 1, Introduction to Computer Science 2, Fundamentals of Computer Science 1, Programming Language Concepts,
            Introduction to Website Development, Building Web
            Applications, Principles of Financial Accounting
          </div>
        </div>
      </div>
      <div className="px-6 mt-6 border-2 border-black rounded-lg shadow-lg pt-5 pb-5">
        <div className="font-bold text-xl" id="experience">
          Experience
        </div>
        <div className="mt-2">
          <div className="font-semibold">
            IT Intern - Merola Tile 
          </div>
          <div className="text-sm text-zinc-400">
            IT Intern | Manalapan, NJ | June, 2024 -
            August, 2024 | October, 2024 - January, 2025
          </div>
          <ul>
          <li>
              • Integrated a IT asset management inventory system using PHP, Apache2, Linux, Netowrking, and various web development technologies.
              Installed proper security protocols on server to ensure app is running smoothly and securly. 
            </li>
            <li>
              • Conducted comprehensive data analysis and generated detailed reports on quarterly KPIs using advanced functionalities of Microsoft Excel.
            </li>
            <li>
            • Spearheaded the development of a full-stack web application to optimize the Quality Control PO process, utilizing Python, Flask, and various JavaScript libraries.
            </li>
            <li>
            • Provided efficient IT helpdesk support, promptly addressing and resolving hardware and software issues.
            </li>
            <li>
            • Collaborated on diverse projects, including reporting and presenting emerging technologies to leadership.
            </li>
          </ul>
        </div>
        <div className = "line">
          <hr className="mt-4" />
        </div>
        <div className="mt-2">
          <div className="font-semibold">
            Vice President - Gadya Payment Solutions
          </div>
          <div className="text-sm text-zinc-400">
            Vice President | Marlboro, NJ | October, 2023 -
            Present
          </div>
          <ul>
            <li>
              • Oversee day to day operations of the company. 
            </li>
            
          </ul>
        </div>
        <div className = "line">
          <hr className="mt-4" />
        </div>
        <div className="mt-2">
          <div className="font-semibold">
            Python Development Contractor - Premiere Medical Lab
          </div>
          <div className="text-sm text-zinc-400">
            Python Development Contractor | Edison, NJ | September, 2023 -
            November, 2023
          </div>
          <ul>
            <li>
              • Crafted a bespoke Python GUI application tailored to client
              specifications, leveraging agile methodologies for iterative
              development.
            </li>
            <li>
              • Developed a Python GUI application to seamlessly query data from
              a MySQL database, structure the information, and export data to
              Excel.
            </li>
            <li>
              • Employed GUI frameworks including Tkinter and PyQt5 to enhance
              the user experience.
            </li>
            <li>
              • Integrated exception handling mechanisms to guarantee
              uninterrupted and smooth application performance.
            </li>
            <li>
              <strong>Skills: </strong> Python, MySQL, Tkinter, PyQt5, Agile Methodologies
            </li>
          </ul>
        </div>
        <div className = "line">
          <hr className="mt-4" />
        </div>
        <div className="mt-2">
          <div className="font-semibold">
            Inventory Control Intern - Merola Tile
          </div>
          <div className="text-sm text-zinc-400">
            Inventory Control Intern | Manalapan, NJ | July, 2023 - August, 2023
          </div>
          <ul>
            <li>
              • Organize daily cycle count using excel and warehouse management
              system
            </li>
            <li>
              • Research item logs to determine cause of inventory discrepancies
            </li>
            <li>• Report on daily cycle count.</li>
            <li>
              • Data entry of inventory adjustments (approve/reject and disco
              items).
            </li>
            <li>• Assist with special projects as needed</li>
            <li>
              <strong>Skills: </strong> Data Entry, Data Analysis,
              Communication, Microsoft Excel, Microsoft Office, Time Management
            </li>
          </ul>
        </div>

        <div className = "line">
          <hr className="mt-4" />
        </div>
        <div className="mt-2">
          <div className="font-semibold">Contractor – Stay Healthy Inc</div>
          <div className="text-sm text-zinc-400">
            Webflow Web Developer | April 26, 2023 - Present
          </div>
          <ul>
            <li>
              • Developed and maintained an e-commerce site using Webflow,
              Shippo, and Stripe Integrations
            </li>
            <li>• Optimized website performance, user experience, and SEO</li>
            <li>
              • Troubleshot and resolved website issues in a timely manner to
              maintain optimal website functionality and uptime.
            </li>
            <li>
              • Implemented custom CMS solutions to meet clients’ unique
              requirements, resulting in increased efficiency and user
              engagement.
            </li>
            <li>• Constantly updated website with more items</li>
            <li>
              <strong>Skills: </strong> Webflow, CSS, HTML, SEO, Stripe
              Integration, Testing
            </li>
          </ul>
        </div>
        <div className = "line">
          <hr className="mt-4" />
        </div>
        <div className="mt-4">
          <div className="font-semibold">Freelancer – Gadya Media</div>
          <div className="text-sm text-zinc-400">
            Website Development Dec 2022 – Present | Social Media Marketing Nov
            2021 - Present
          </div>
          <ul>
            <li>
              • Assisted with WordPress website development for clientele.
            </li>
            <li>
              • Created website and social media assets with Photoshop, Canva,
              and Premiere
            </li>
            <li>
              • Worked with WordPress CMS to meet clients’ unique requirements,
              resulting in increased efficiency and user engagement.
            </li>
            <li>
              • Created effective social media growth strategies and funnels.
            </li>
            <li>
              • Scheduled content and recorded analytics for client accounts
              using tools such as Buffer.
            </li>
            <li>
              <strong>Skills: </strong> HTML, CSS, WordPress, Adobe Creative
              Cloud, SEO, Social Media Marketing, Social Media Management
            </li>
          </ul>
        </div>
      </div>
      <div className="px-6 mt-6">
        <div className="font-bold text-xl" id="#projects">
          Projects
        </div>
        <div className="mt-2">
          <div className="font-semibold">MyWebClass Project</div>
          <div className="text-sm text-zinc-400">
            Link:{" "}
            <a href="https://njit-wis.github.io/project-2-team-dennis-and-paul/">
              MyWebClass
            </a>
          </div>
          <div>
            Skills: Next.js, JavaScript, HTML, CSS, Bootstrap 5, Team
            Management, GitHub, Agile Project Management, Google Analytics,
            MailChimp, SEO
          </div>
          <ul>
            <li>
              • Led a team of students to develop an online blog site using
              Next.js and other technologies.
            </li>
            <li>
              • Used Agile Project Management to plan out site by creating
              initiatives, epics, user stories, and tasks.
            </li>
            <li>
              • Developed landing page that follows a efficient marketing funnel
            </li>
            <li>
              • Developed blog site that uses markdown files to create blogs.
            </li>
            <li>
              • Used archetypes to create a consistent brand across all pages.
            </li>
            <li>
              • Implemented Google Analytics Tracking to track user engagement
              and conversions.
            </li>
            <li>
              • Implemented internationalization using Google Translate API
            </li>
            <li>• Integrated MailChimp to collect user emails.</li>
            <li>
              • Complied with GDPR regulations and handled all user material
              appropriately.
            </li>
            <li>
              • Optimized website deployment and deployed website to GitHub
              using GitHub
            </li>
          </ul>
        </div>
      </div>
      <div className="px-6 mt-6">
        <div className="">
          <div className="font-semibold">
            Dennis Boguslavskiy Personal Website
          </div>
          <div className="text-sm text-zinc-400">
            Link: <a href="">Dennis Boguslavskiy Personal Site</a>
          </div>
          <div>
            Skills: Next.js, JavaScript, HTML, CSS, Tailwind CSS, DaiseyUI,
            GitHub, Google Analytics, Firebase, Firestore, Vercel, SEO
          </div>
          <ul>
            <li>
              • Created a modern landing page with NextJs and Tailwind CSS and
              DaiseyUI
            </li>
            <li>
              • Implemented a contact form that accesses a firebase database
            </li>
            <li>
              • Developed landing page that follows a efficient marketing funnel
            </li>
            <li>• Deployed website using Vercel</li>
            <li>
              • Implemented Google Analytics Tracking to track user engagement
              and conversions.
            </li>
            <li>
              • Implemented internationalization using Google Translate API
            </li>
            <li>
              • Complied with GDPR regulations and handled all user material
              appropriately.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
