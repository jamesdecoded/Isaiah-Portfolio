'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import TiltCard from './TiltCard'
import ProjectVisual, { ProjectVisualVariant } from './ProjectVisual'

export default function Projects() {
  const projects: {
    title: string
    description: string
    tech: string[]
    github: string
    visual: ProjectVisualVariant
    gradient: string
  }[] = [
    {
      title: 'LLM Evaluation & Benchmark Platform',
      description: 'Built a platform for evaluating LLM responses, using structured rubrics, reference answers, comparative scoring, and a set of edge-case tests to stress-test outputs.',
      tech: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
      github: 'https://github.com/jamesdecoded',
      visual: 'rubric',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Data Quality & Annotation Pipeline',
      description: 'Built a pipeline that cleans and validates datasets, classifies errors, handles annotation, and produces automated QA reports.',
      tech: ['Python', 'Pandas', 'SQL'],
      github: 'https://github.com/jamesdecoded',
      visual: 'pipeline',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI Code Evaluation Benchmark',
      description: 'Created coding benchmarks with reference solutions and hidden tests, used to check AI-generated code for correctness, edge cases, and whether it follows instructions.',
      tech: ['Python', 'pytest', 'Docker', 'GitHub Actions'],
      github: 'https://github.com/jamesdecoded',
      visual: 'tests',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Python Data Processing Pipeline',
      description: 'A modular pipeline that cleans, validates, and analyzes CSV datasets, with automated reporting and error handling built in.',
      tech: ['Python', 'Pandas'],
      github: 'https://github.com/jamesdecoded',
      visual: 'csv',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'REST API Integration Application',
      description: 'A Python app that pulls from live third-party APIs, handling authentication, rate limits, response parsing, and validation.',
      tech: ['Python', 'REST APIs', 'Postman'],
      github: 'https://github.com/jamesdecoded',
      visual: 'api',
      gradient: 'from-indigo-500 to-blue-500',
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <TiltCard className="glass rounded-3xl p-6 glass-hover group h-full">
                <div className="mb-4">
                  <div className={`w-full h-40 rounded-2xl bg-gradient-to-br ${project.gradient} mb-4 overflow-hidden`}>
                    <ProjectVisual variant={project.visual} />
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

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl gradient-bg text-white text-sm font-medium"
                >
                  <Github size={16} />
                  View on GitHub
                </motion.a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
