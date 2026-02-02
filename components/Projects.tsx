'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Project Title 1',
      description: 'Add your project description here. Explain what it does and what technologies you used.',
      tech: ['FastAPI', 'PostgreSQL', 'React'],
      github: 'https://github.com/jamesdecoded',
      demo: '#',
    },
    {
      title: 'Project Title 2',
      description: 'Add your project description here. Explain what it does and what technologies you used.',
      tech: ['Python', 'SQLAlchemy', 'Tailwind'],
      github: 'https://github.com/jamesdecoded',
      demo: '#',
    },
    {
      title: 'Project Title 3',
      description: 'Add your project description here. Explain what it does and what technologies you used.',
      tech: ['Node.js', 'MySQL', 'JavaScript'],
      github: 'https://github.com/jamesdecoded',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl p-6 glass-hover group"
            >
              <div className="mb-4">
                <div className="w-full h-40 rounded-2xl gradient-bg mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {project.title}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full glass text-blue-600 dark:text-blue-400 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl glass glass-hover text-sm font-medium"
                >
                  <Github size={16} />
                  Code
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl gradient-bg text-white text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
