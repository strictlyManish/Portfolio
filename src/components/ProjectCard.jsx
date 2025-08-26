// src/components/ProjectCard.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function ProjectCard({ project }) {
  const { title, description, image, tags, live, github } = project;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image Section with Overlay */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
        <h3 className="absolute bottom-3 left-4 text-lg font-bold text-white drop-shadow-md">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-500/10 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-400/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-auto text-sm">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${title}`}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Live Demo <FaExternalLinkAlt />
            </a>
          )}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub code for ${title}`}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-200 rounded-xl shadow-md hover:bg-gray-600 hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Code <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
