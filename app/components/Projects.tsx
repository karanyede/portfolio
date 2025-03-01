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
    image:
      "https://media-hosting.imagekit.io//d0425233ed2344b3/Screenshot%202025-03-01%20005826.png?Expires=1835379052&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=a2Wl7D9ecEzWBCC2syFAyJmOfZyzqLryIfBUYiyygE3IC~I-VJyZoLbiWFzdA~VY7c75eijmfyQce0zqGC1fxam7xgnLZ2W8q-tusjLFDlGXD99FTy9xAsyM9ayiZpef0NgI84W8-0YyizmXUKL8rNMSvDT9q3atyyy5BFpg4c~Rc8nDImG8~sZBAEusXiHjLi8aafsSz32SQsaeRSKttlX9NPTQFXIIVgRYrim8I8xGmh7mmxYiuTmZyRltm12ujYBy~LNrd7EdJZ5mtSUI~aUSDrTbT4zYsXseB9o3J2K2rE7S8O~qtU6YjzdvZj4SEA5HwlGptHB2LoE9dIRcrw__",
    link: "https://karanyede.github.io/Tic-Tac-Toe/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "My personal portfolio Website",
    description:
      "Developed a trading agent using Reinforcement Learning to adapt to market conditions dynamically. Outperformed the Buy-and-Hold strategy by 15% in cumulative returns on backtesting with S&P 500 data.",
    image:
      "https://media-hosting.imagekit.io//9c8c5b047f6440b6/Screenshot%202025-03-01%20092044.png?Expires=1835409090&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hgUWnl8caIi~ekSmPVnsGKtrHrSwSO9q6q6SQ-MTQN4Vw3rrzS~vLQsTdRW34ELs90mwzuuIQpALYaXguPzoK0XAS4giF3egcluzaMTOsGLsaL65HjaZosrt4pFYrK83b5B4qqaw4QEO60jGP4Iv50a4mQoeG1lABGNx97IPSX~NG-MtaPRTszcyLA2dcdkyQeqEdX10wB6rMc3vilsYAHgwUIrWF1gFWWRz~3OjNkkgdcOrRmpCPPeFMKombvvNd-5CzmEv7IFK3BTXKnYCPDYw7dklaQAIhKAmjZ7wp1pMg6wQxateXViwKAE2vM1Kr7oMwJ-L2e0XJZKvdDXCXA__",
    link: "https://karanyede.github.io/First-Repository/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Updated Portfolio",
    description:
      "I've recently updated my personal portfolio website with a fresh new theme, elevating its visual appeal and user experience. The revamped design boasts a bold color scheme, enhanced typography, and intuitive navigation, making it easier for visitors to explore my projects and accomplishments. With these enhancements, my portfolio now better reflects my personality and style, while showcasing my skills and expertise in front-end development.",
    image:
      "https://media-hosting.imagekit.io//6b0979c8307a4c12/Screenshot%202025-03-01%20012646.png?Expires=1835380631&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bFe8hj6eNETt8USZL~fm7t0aiMKxLvcyi-~aXCJpI9WuuLI7COUeoNixVLJxeJMJsB~dSSKSlaD8UpUso038DxB6~DeBSdOLVDREsbzJ~SiTyrayI-ew9ivrLLhsupeNq9diTa51SGLeKAfqQWdnTqsf3-OTqBtMgecYxply1~Ou7xEMUxtejUGWJ-HFU40UtO9cRNlYEidOMIb~c13MNN~zWmt041LJHsN0KL7gRtt3RY941zlpZsBbsuXuZsgrGOK-nw~oE00Wp02IgKLHButl3Bvu5bPl8vjqhJX8uYKgEX6iX~lum97mamCCNthu~k1WqtX3ps1-0VYkqtl00g__",
    link: "https://karanyede.github.io/profile/",
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

