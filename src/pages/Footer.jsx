import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/strictlyManish",
    hoverColor: "hover:text-purple-400",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/@XManish_",
    hoverColor: "hover:text-sky-500",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/manishraz1789",
    hoverColor: "hover:text-pink-400",
  }
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-black border-t border-neutral-800 pt-16 pb-10 overflow-hidden"
    >
      {/* Decorative top wave */}
      <div className="absolute inset-x-0 -top-1 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 md:h-28"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,32L60,42.7C120,53,240,75,360,85.3C480,96,600,96,720,90.7C840,85,960,75,1080,74.7C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill="url(#footerGradient)"
            className="opacity-20"
          />
          <defs>
            <linearGradient id="footerGradient" x1="0" x2="1">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated background blobs */}
      <motion.div
        className="absolute -left-20 -top-10 w-56 h-56 bg-purple-500/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity }}
        aria-hidden
      />
      <motion.div
        className="absolute -right-20 -bottom-10 w-72 h-72 bg-pink-500/25 rounded-full blur-3xl"
        animate={{ scale: [1, 0.95, 1], opacity: [0.9, 0.7, 0.9] }}
        transition={{ duration: 7, repeat: Infinity }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-left">
          {/* Left: Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">Get in touch</h3>
            <p className="text-neutral-400 max-w-sm">
              I'm open to freelance work and collaborations. Send a message and
              I'll get back to you.
            </p>

            <a
              href="mailto:manishraz800@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 text-white text-sm font-medium shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-transform"
              aria-label="Email Manish"
            >
              Contact Me
            </a>

            <div className="hidden sm:flex flex-col text-sm text-neutral-400">
              <span>Available for:</span>
              <ul className="mt-2 space-y-1">
                <li>• Frontend & React</li>
                <li>• UI/UX implementations</li>
                <li>• Consulting & mentoring</li>
              </ul>
            </div>
          </motion.div>

          {/* Center: Name / Tagline */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Manish Kumar
              </span>
            </h2>
            <p className="text-neutral-400 max-w-sm mx-auto md:mx-0">
              Crafting digital experiences with code and creativity. Let's
              connect and build something great.
            </p>

            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a
                href="/resumee_ss word.pdf"
                className="text-sm px-3 py-2 rounded-md border border-neutral-700 text-neutral-200 hover:bg-neutral-900 transition"
                aria-label="View Resume"
              >
                Resume
              </a>
              <a
                href="/projects"
                className="text-sm px-3 py-2 rounded-md bg-white/5 text-white hover:brightness-110 transition"
                aria-label="See Projects"
              >
                Projects
              </a>
            </div>
          </motion.div>

          {/* Right: Social icons */}
          <motion.div
            className="flex flex-col items-start md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-medium text-white">Follow</h4>
            <p className="text-neutral-400 mb-4">Connect on social media</p>

            <div className="flex flex-wrap gap-3 justify-end">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full text-neutral-200 bg-white/3 backdrop-blur-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${link.hoverColor}`}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline text-sm">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-6 text-xs text-neutral-500 text-right">
              <p>© {new Date().getFullYear()} Manish Kumar</p>
              <p className="mt-1">All Rights Reserved.</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom small links */}
        <div className="mt-8 border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p className="text-center md:text-left">
            Built with ❤️ using React & Tailwind CSS.
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
