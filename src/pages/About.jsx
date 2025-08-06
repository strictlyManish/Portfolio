import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiMongodb, SiExpress, SiVercel } from "react-icons/si";
import ShinyText from "../components/ShinyText";
function About() {
  const skills = {
    Frontend: [
      { Icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
      { Icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
      { Icon: IoLogoJavascript, name: "JavaScript", color: "text-yellow-400" },
      { Icon: FaReact, name: "React", color: "text-blue-400" },
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-400" },
    ],
    Backend: [
      { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
      { Icon: SiExpress, name: "Express.js", color: "text-neutral-400" },
      { Icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    ],
    Tools: [
      { Icon: FaGitAlt, name: "Git", color: "text-orange-600" },
      { Icon: FaFigma, name: "Figma", color: "text-pink-500" },
      { Icon: SiVercel, name: "Vercel", color: "text-neutral-300" },
    ],
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center bg-neutral-900/50 px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        {/* TEXT SECTION (takes 3 columns on medium screens) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-3"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-100">
            About <span className="text-purple-500">Me</span>
          </h1>

          <div className="text-lg text-neutral-300 space-y-4">
            <ShinyText
              text="
                Hi, I'm Manish — a frontend developer passionate about crafting elegant, efficient, and user-friendly web experiences. My journey began with a curiosity about how websites work and quickly turned into a love for building with React and modern JavaScript. I focus on creating responsive, accessible, and maintainable interfaces. Outside of coding, I enjoy exploring new tech, contributing to open source, and sipping coffee while dreaming up new projects.
            "
              disabled={false}
              speed={150}
              className="custom-class"
            />
          </div>
        </motion.div>

        {/* IMAGE & SKILLS SECTION (takes 2 columns on medium screens) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-2 space-y-8"
        >
          <div className="flex justify-center">
            <img
              src="public\about.png" // Replace with your actual photo
              alt="Manish Kumar"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover"
            />
          </div>

          {/* SKILLS */}
          <div className="bg-neutral-800/50 p-6 rounded-lg">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-4 last:mb-0">
                <h3 className="text-purple-400 font-semibold mb-3 text-lg">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {skillList.map(({ Icon, name, color }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2"
                      title={name}
                    >
                      <Icon className={`${color} text-3xl`} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
