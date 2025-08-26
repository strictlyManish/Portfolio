import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { HiArrowDown } from "react-icons/hi";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Hi, I'm{" "}
              <span className="block text-purple-400 mt-2">
                <Typewriter
                  words={[
                    "Manish Kumar 👋",
                    "Frontend Developer",
                    "React Enthusiast",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
              A{" "}
              <span className="text-purple-400 font-semibold">
                Frontend Developer
              </span>{" "}
              passionate about creating beautiful, performant websites and apps.
              I enjoy crafting responsive, accessible interfaces using React and
              Tailwind CSS.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/projects"
                className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-purple-700 hover:scale-105 transition-all"
              >
                View Projects
              </Link>
              <a
                href="/resumee_ss word.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-xl font-semibold hover:bg-purple-500 hover:text-white hover:scale-105 transition-all"
              >
                Download Resume
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-6 mb-10">
              <a
                href="https://github.com"
                className="text-neutral-400 hover:text-white text-2xl transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                className="text-neutral-400 hover:text-blue-400 text-2xl transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* TECH STACK */}
            <div>
              <p className="mb-4 font-medium text-lg">Tech Stack:</p>
              <div className="flex flex-wrap gap-6 text-3xl">
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="/hero.png"
                alt="Manish - Frontend Developer"
                className="rounded-2xl object-cover max-w-sm md:max-w-md lg:max-w-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <HiArrowDown className="text-white text-2xl animate-bounce" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-neutral-800 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
              I'm a passionate frontend developer with a love for creating
              engaging user experiences. With expertise in modern web
              technologies, I transform ideas into beautiful, functional
              websites that users love to interact with.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Responsive Design",
                  desc: "Creating websites that look great on all devices",
                },
                {
                  title: "Modern Frameworks",
                  desc: "Expert in React, Next.js, and modern JavaScript",
                },
                {
                  title: "User Experience",
                  desc: "Focus on intuitive and accessible interfaces",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-neutral-700 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">
                    {card.title}
                  </h3>
                  <p className="text-neutral-300">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <Skills/>

      {/* CTA SECTION */}
      <Contact/>
    </div>
  );
}

export default Home;
