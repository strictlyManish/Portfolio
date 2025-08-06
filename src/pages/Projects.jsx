// src/components/Projects.jsx

import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/data"; 
import ProjectCard from "../components/ProjectCard";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 md:px-8 py-20 bg-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-100">
            My Creative <span className="text-purple-600">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here are a few projects I've worked on recently.
          </p>
        </motion.div>

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