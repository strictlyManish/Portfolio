// src/components/Projects.jsx

import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/data";
import ProjectCard from "../components/ProjectCard";

// Animation container for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-neutral-900 via-purple-900/10 to-neutral-900 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-white">
            My Creative
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 block">
              Projects
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            Here are a few projects I've worked on recently, showcasing my
            skills and passion for web development.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
