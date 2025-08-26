import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { HiArrowDown } from "react-icons/hi";

function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-purple-900/20 to-neutral-900 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-100">
              Hi, I'm{" "}
              <span className="text-purple-400 block mt-2">
                <Typewriter
                  words={["Manish Kumar 👋", "Frontend Developer", "React Enthusiast"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
              A <span className="text-purple-400 font-semibold">Frontend Developer</span> passionate about creating beautiful, performant
              websites and apps. I enjoy crafting responsive, accessible
              interfaces using modern tools like React and Tailwind CSS.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/projects"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105"
              >
                View Projects
              </Link>
              <a
                href="/resumee_ss word.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-6 mb-12">
              <a href="https://github.com" className="text-neutral-400 hover:text-white text-2xl transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" className="text-neutral-400 hover:text-blue-400 text-2xl transition-colors">
                <FaLinkedin />
              </a>
            </div>

            {/* TECH STACK with Icons */}
            <div className="text-neutral-300">
              <p className="mb-4 font-medium text-lg">Tech Stack:</p>
              <div className="flex flex-wrap gap-6 text-3xl">
                <FaHtml5
                  className="text-orange-500 hover:scale-125 transition-transform cursor-pointer"
                  title="HTML5"
                />
                <FaCss3Alt
                  className="text-blue-500 hover:scale-125 transition-transform cursor-pointer"
                  title="CSS3"
                />
                <IoLogoJavascript
                  className="text-yellow-400 hover:scale-125 transition-transform cursor-pointer"
                  title="JavaScript"
                />
                <FaReact
                  className="text-blue-400 hover:scale-125 transition-transform cursor-pointer"
                  title="React"
                />
                <SiTailwindcss
                  className="text-teal-400 hover:scale-125 transition-transform cursor-pointer"
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
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="/hero.png"
                alt="Manish - Frontend Developer"
                className="rounded-2xl drop-shadow-2xl object-cover max-w-full h-auto"
              />
              <div className="absolute -inset-1 opacity-25"></div>
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
      <section className="py-20 bg-neutral-800 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">About Me</h2>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              I'm a passionate frontend developer with a love for creating engaging user experiences. 
              With expertise in modern web technologies, I transform ideas into beautiful, functional websites 
              that users love to interact with.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Responsive Design</h3>
                <p className="text-neutral-300">Creating websites that look great on all devices</p>
              </div>
              <div className="bg-neutral-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Modern Frameworks</h3>
                <p className="text-neutral-300">Expert in React, Next.js, and modern JavaScript</p>
              </div>
              <div className="bg-neutral-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">User Experience</h3>
                <p className="text-neutral-300">Focus on intuitive and accessible interfaces</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 bg-neutral-900 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
            <p className="text-lg text-neutral-300">Technologies I work with</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'HTML5', level: '95%', color: 'bg-orange-500' },
              { name: 'CSS3', level: '90%', color: 'bg-blue-500' },
              { name: 'JavaScript', level: '85%', color: 'bg-yellow-400' },
              { name: 'React', level: '80%', color: 'bg-blue-400' },
              { name: 'Tailwind', level: '90%', color: 'bg-teal-400' },
              { name: 'Git', level: '75%', color: 'bg-red-500' },
              { name: 'Figma', level: '70%', color: 'bg-purple-500' },
              { name: 'Node.js', level: '60%', color: 'bg-green-500' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-white font-semibold mb-2">{skill.name}</div>
                <div className="bg-neutral-700 rounded-full h-2 mb-2">
                  <div 
                    className={`${skill.color} h-2 rounded-full transition-all duration-1000`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <div className="text-neutral-400 text-sm">{skill.level}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-pink-800 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Let's Work Together</h2>
            <p className="text-lg text-neutral-200 mb-8">
              Ready to bring your ideas to life? Let's create something amazing together!
            </p>
            <Link
              to="/contact"
              className="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-all transform hover:scale-105 inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;