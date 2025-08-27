import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { 
    name: "GitHub", 
    icon: FaGithub, 
    url: "https://github.com/strictlyManish", 
    hoverColor: "hover:text-purple-400" 
  },
  { 
    name: "Twitter", 
    icon: FaTwitter, 
    url: "https://twitter.com/@XManish_", 
    hoverColor: "hover:text-sky-500" 
  },
  { 
    name: "Instagram", 
    icon: FaInstagram, 
    url: "https://instagram.com/manishraz1789", 
    hoverColor: "hover:text-pink-400" 
  }
];

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-black border-t border-neutral-800 pt-12 pb-8 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-200" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Name */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Manish Kumar
          </span>
        </h2>
        
        {/* Tagline */}
        <p className="text-neutral-400 max-w-md mx-auto mb-8">
          Crafting digital experiences with code and creativity. Let's connect!
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 text-2xl">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={`text-neutral-300 transition-colors duration-200 ${link.hoverColor}`}
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <link.icon />
            </motion.a>
          ))}
        </div>
        
        {/* Copyright */}
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Manish Kumar. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;