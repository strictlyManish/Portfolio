import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiRedux,
  SiVite,
  SiFigma,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML5",
        icon: <SiHtml5 className="text-orange-500" />,
        description: "Building the structure and content of web pages.",
        level: 95,
      },
      {
        name: "CSS3",
        icon: <SiCss3 className="text-blue-500" />,
        description: "Styling and layout of websites with modern techniques.",
        level: 90,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
        description: "Adding interactivity and dynamic functionality to web applications.",
        level: 85,
      },
      {
        name: "React",
        icon: <SiReact className="text-cyan-500" />,
        description: "Developing robust and interactive user interfaces using components.",
        level: 80,
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-500" />,
        description: "Managing application state with predictable state containers.",
        level: 70,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
        description: "Rapidly building custom user interfaces with a utility-first approach.",
        level: 85,
      },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      {
        name: "Git",
        icon: <SiGit className="text-red-500" />,
        description: "Version control for tracking changes in source code.",
        level: 80,
      },
      {
        name: "GitHub",
        icon: <SiGithub className="text-gray-800" />,
        description: "Collaborating and hosting projects in a remote repository.",
        level: 75,
      },
      {
        name: "Vite",
        icon: <SiVite className="text-purple-600" />,
        description: "Fast and lightweight build tool for modern web projects.",
        level: 90,
      },
      {
        name: "Figma",
        icon: <SiFigma className="text-pink-500" />,
        description: "Designing and prototyping user interfaces and user experiences.",
        level: 60,
      },
    ],
  },
];

// Animation variants for the skill cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Skills() {
  return (
    <section className="min-h-screen px-4 md:px-8 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
          My <span className="text-purple-600">Skills</span>
        </h2>

        {/* Iterate over skill categories */}
        {skills.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-left text-gray-800 dark:text-gray-200">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-5xl mr-4">{skill.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{skill.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.description}</p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                    <motion.div
                      className="bg-purple-600 h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    ></motion.div>
                  </div>
                  <p className="text-right text-xs mt-1 text-gray-500 dark:text-gray-400">{skill.level}%</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;