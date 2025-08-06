import React, { useState, useEffect } from "react"; // Import useEffect
import { NavLink } from "react-router-dom";

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
    <nav
      className={`
        bg-gray-700 px-4 py-3 shadow-md w-full
        sticky top-0 z-50 transition-transform duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto text-white">
        <h1 className="text-xl font-bold">Manish Kumar</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <ul
          id="mobile-menu"
          className={`
            md:flex md:items-center md:gap-6 
            ${isOpen ? "block" : "hidden"}
            absolute top-full left-0 w-full bg-gray-800 shadow-md
            md:static md:w-auto md:bg-transparent md:shadow-none
          `}
        >
          {navItems.map(({ name, to }) => (
            <li
              key={name}
              className="px-4 py-2 md:p-0  border-gray-200 md:border-none"
            >
              <NavLink
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block w-full hover:text-white ${
                    isActive ? "text-white font-medium" : "text-purple-400"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
