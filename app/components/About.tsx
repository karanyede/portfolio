"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AnimatedGradient } from "./ui/animated-gradient"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">About Me</h2>
          </AnimatedGradient>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            "🔭 Engineering Student fueled with Passion for tech, Graphic Design, Problem Solving, and Continuous Learning. My journey is a fusion of logic and imagination, where every challenge is an opportunity to excel. Let's connect and embark on a journey of limitless exploration and innovation! ⚡",
            "As a creative enthusiast, I enjoy writing, reading, painting, and exploring digital arts. I'm passionate about crafting engaging content that connects with readers and sparks their imagination. I'm always seeking new opportunities to learn and push the boundaries of my creativity",
            "I'm constantly exploring new techniques and tools in the current market to stay updated and grow in the currrent era of competition. Let's connect and explore the endless possibilities of creative expression together ⚡.",
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-gray-300 mb-6"
              whileHover={{ scale: 1.05, color: "#60A5FA" }}
              transition={{ duration: 0.2 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

