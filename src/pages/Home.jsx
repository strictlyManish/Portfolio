import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { HiArrowDown } from "react-icons/hi";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import About from "../pages/About";

const typewriterWords = [
  "Manish Kumar",
  "Web Dev"
];

const techStack = [
  { icon: FaHtml5, color: "text-orange-500", title: "HTML5" },
  { icon: FaCss3Alt, color: "text-blue-500", title: "CSS3" },
  { icon: IoLogoJavascript, color: "text-yellow-400", title: "JavaScript" },
  { icon: FaReact, color: "text-blue-400", title: "React" },
];

const socialLinks = [
  { 
    href: "https://github.com/strictlyManish", 
    icon: FaGithub, 
    hoverColor: "hover:text-white", 
    ariaLabel: "GitHub Profile" 
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="block text-purple-400 mt-1 sm:mt-2">
                  <Typewriter
                    words={typewriterWords}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A{" "}
                <span className="text-purple-400 font-semibold">
                  Frontend Developer
                </span>{" "}
                passionate about creating beautiful, performant websites and apps.
                I enjoy crafting responsive, accessible interfaces using React and
                Tailwind CSS.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center lg:justify-start">
                <Link
                  to="/projects"
                  className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-purple-700 hover:scale-105 transition-all duration-200 text-center"
                >
                  View Projects
                </Link>
                <a
                  href="/resumee_ss word.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-xl font-semibold hover:bg-purple-500 hover:text-white hover:scale-105 transition-all duration-200 text-center"
                >
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 mb-8 sm:mb-10 justify-center lg:justify-start">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className={`text-neutral-400 ${link.hoverColor} text-2xl transition-colors duration-200 hover:scale-110 transform`}
                  >
                    <link.icon />
                  </a>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="text-center lg:text-left">
                <p className="mb-3 sm:mb-4 font-medium text-base sm:text-lg">Tech Stack:</p>
                <div className="flex flex-wrap gap-4 sm:gap-6 text-2xl sm:text-3xl justify-center lg:justify-start">
                  {techStack.map((tech, index) => (
                    <tech.icon
                      key={index}
                      className={`${tech.color} hover:scale-125 transition-transform duration-200 cursor-pointer`}
                      title={tech.title}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center order-1 lg:order-2"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <img
                  src="/hero.png"
                  alt="Manish Kumar - Frontend Developer"
                  className="rounded-2xl object-cover w-full h-auto shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <HiArrowDown className="text-white text-xl sm:text-2xl animate-bounce" />
        </motion.div>
      </section>

      {/* Page Sections */}
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;