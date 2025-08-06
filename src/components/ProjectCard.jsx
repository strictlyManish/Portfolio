// src/components/ProjectCard.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Animation variants for staggered effect
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function ProjectCard({ project }) {
  const { title, description, image, tags, live, github } = project;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        <div className="flex gap-4 mt-auto text-sm">
         
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub code for ${title}`}
            className="text-gray-200 font-semibold flex items-center gap-1.5 hover:underline"
          >
            View Code <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;