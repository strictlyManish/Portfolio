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
        icon: <SiGithub className="text-neutral-300" />,
        description: "Collaborating and hosting projects in a remote repository.",
        level: 75,
      },
      {
        name: "Vite",
        icon: <SiVite className="text-purple-400" />,
        description: "Fast and lightweight build tool for modern web projects.",
        level: 90,
      },
      {
        name: "Figma",
        icon: <SiFigma className="text-pink-400" />,
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
    <div className="min-h-screen bg-neutral-900">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32  px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-7xl mx-auto relative z-10"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            A diverse set of technologies and tools that I use to build modern web applications.
          </p>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 lg:py-32 bg-neutral-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {skills.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white border-l-4 border-purple-400 pl-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col p-6 bg-neutral-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-neutral-600"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-5xl mr-4">{skill.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                        <p className="text-sm text-neutral-300 mt-1">{skill.description}</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-neutral-600 rounded-full h-2.5 mt-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      ></motion.div>
                    </div>
                    <p className="text-right text-xs mt-1 text-neutral-400">{skill.level}%</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;