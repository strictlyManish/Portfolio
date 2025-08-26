import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

function Home() {
  return (
    <section className="ralative z-10 min-h-screen flex items-center justify-center bg-neutral-900/50 px-4 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-100">
            Hi, I'm{" "}
            <span className="text-purple-500">
              <Typewriter
                words={["Manish Kumar 👋"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              
            </span>
          </h1>

          <p className="text-lg text-neutral-300 mb-6">
            A <span className="text-purple-600">Frontend Developer</span> passionate about creating beautiful, performant
            websites and apps. I enjoy crafting responsive, accessible
            interfaces using modern tools like React and Tailwind CSS.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="/projects"
              className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              View Projects
            </Link>
            <a
              href="public\resumee_ss word.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition"
            >
              Download Resume
            </a>
          </div>

          {/* TECH STACK with Icons */}
          <div className="text-neutral-300">
            <p className="mb-3 font-medium">Tech Stack:</p>
            <div className="flex flex-wrap gap-4 text-2xl">
              <FaHtml5
                className="text-orange-500 hover:scale-125 transition-transform"
                title="HTML5"
              />
              <FaCss3Alt
                className="text-blue-500 hover:scale-125 transition-transform"
                title="CSS3"
              />
              <IoLogoJavascript
                className="text-yellow-400 hover:scale-125 transition-transform"
                title="JavaScript"
              />
              <FaReact
                className="text-blue-400 hover:scale-125 transition-transform"
                title="React"
              />
              <SiTailwindcss
                className="text-teal-400 hover:scale-125 transition-transform"
                title="Tailwind CSS"
              />
            </div>
          </div>
        </motion.div>

        {/* IMAGE / ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <img
            src="/hero.png"
            alt="Manish - Frontend Developer"
            className="rounded-lg drop-shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
