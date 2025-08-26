import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Skills", to: "/skills" },
    { name: "Contact", to: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (isOpen) {
        setIsVisible(true);
        return;
      }

      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur-lg shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 text-white">
        {/* LOGO */}
        <h1 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Manish Kumar
          </span>
        </h1>

        {/* MENU TOGGLE (MOBILE) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* NAV LINKS */}
        <ul
          id="mobile-menu"
          className={`md:flex md:items-center md:gap-8 font-medium absolute md:static left-0 top-full w-full md:w-auto bg-neutral-900 md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map(({ name, to }) => (
            <li key={name} className="px-4 py-3 md:p-0 text-center md:text-left">
              <NavLink
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `relative block w-full transition-colors duration-300 
                  ${
                    isActive
                      ? "text-white"
                      : "text-neutral-300 hover:text-purple-400"
                  }`
                }
              >
                {name}
                {/* Gradient underline on active/hover */}
                <span
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full group-hover:left-0"
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Nav;
