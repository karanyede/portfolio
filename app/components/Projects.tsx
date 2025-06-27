"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Share2 } from "lucide-react"
import { AnimatedGradient } from "./ui/animated-gradient"

const projects = [
  {
    title: "Tic Tac Toe - Game ",
    description:
      "I've developed a Tic Tac Toe game using HTML and CSS, featuring a clean and intuitive user interface that provides an engaging gaming experience across various devices. This project showcases a simple yet addictive gameplay, with a responsive design that adapts seamlessly to different screen sizes, ensuring a smooth and enjoyable interaction for players.",
    image:"/TicTacToe.png",
    loading="lazy",
    link: "https://karanyede.github.io/Tic-Tac-Toe/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "My personal portfolio Website",
    description:
      "Personal Portfolio Website – A fully responsive web portfolio built using HTML, CSS, and JavaScript to showcase my projects, skills, and achievements in an interactive and visually appealing way. Designed with a modern UI/UX, featuring smooth animations and a clean layout for an enhanced user experience. Implements JavaScript for dynamic content and responsiveness, making it accessible across different devices and screen sizes.",
    image:"/wEBSITE.png",
    loading="lazy",
    link: "https://karanyede.github.io/First-Repository/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Updated Portfolio",
    description:
      "I've recently updated my personal portfolio website with a fresh new theme, elevating its visual appeal and user experience. The revamped design boasts a bold color scheme, enhanced typography, and intuitive navigation, making it easier for visitors to explore my projects and accomplishments. With these enhancements, my portfolio now better reflects my personality and style, while showcasing my skills and expertise in front-end development.",
    image:"/update.png",
    loading="lazy",
    link: "https://karanyede.github.io/Profile/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Projects</h2>
          </AnimatedGradient>
          <p className="text-gray-400">Some of the notable projects I've built:</p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex flex-col lg:flex-row gap-8 items-center bg-[#1A1A1A] rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
              <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <motion.h3
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ color: "#60A5FA" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-400 mb-6"
                  whileHover={{ color: "#9CA3AF" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[#252525] text-gray-300 rounded-full text-sm"
                      whileHover={{ scale: 1.1, backgroundColor: "#3B82F6", color: "#FFFFFF" }}
                      transition={{ duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

