'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'AI Training & Evaluation Contractor',
      company: 'AI Data Platforms (Multiple Clients)',
      period: '2025 - Present',
      responsibilities: [
        'Write benchmark tasks for AI platforms, including problem statements, reference solutions, and grading rubrics, each reviewed before going live',
        'Build coding benchmarks that test AI-generated code for correctness, efficiency, and whether it follows the instructions it was given',
        'Review model outputs for accuracy and reasoning quality, then write structured feedback the training team can act on',
        'Write annotation guidelines and label datasets for classification and error tagging, covering tricky edge cases',
        'Juggle several contractor engagements at once, working independently and consistently hitting submission deadlines',
      ],
    },
    {
      title: 'Associate, Data Operations',
      company: 'CloudFactory',
      period: '2023 - 2025',
      responsibilities: [
        'Processed and validated large volumes of invoice, receipt, and transcript data for enterprise clients, staying above the team\'s accuracy benchmark',
        'Redesigned the verification and QC workflow, lifting data accuracy by 20% and cutting down on rework later in the pipeline',
        'Delivered image, text, and video annotation for ML training datasets, keeping agreement consistent across annotators',
        'Worked with remote teams across several projects at once, coordinating through Slack, Jira, and Trello',
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
