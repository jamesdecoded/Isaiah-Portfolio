'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Associate – Data Entry',
      company: 'CloudFactory',
      period: 'Feb 2023 - Apr 2025',
      responsibilities: [
        'Entered, verified, and analyzed large datasets including invoices, receipts, and text records',
        'Supported transcription, data analytics, and annotation projects using modern tools',
        'Streamlined processes, increasing data accuracy by 20%',
        'Helped develop a data visualization tool that improved client reporting',
        'Worked closely with cross-functional teams to ensure accurate and timely project delivery',
      ],
    },
    {
      title: 'Software Engineering Student',
      company: 'Moringa School',
      period: 'Aug 2024 - Present',
      responsibilities: [
        'Learning Python, web development, APIs, databases, and software design',
        'Working on team-based projects using agile practices',
        'Building full-stack applications with modern frameworks and tools',
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              <div className="absolute left-5 top-0 w-7 h-7 rounded-full gradient-bg flex items-center justify-center">
                <Briefcase size={14} className="text-white" />
              </div>

              <div className="glass rounded-3xl p-6 glass-hover">
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
