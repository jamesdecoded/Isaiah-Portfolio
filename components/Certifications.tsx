'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    {
      title: 'CloudFactory Data Workforce Training Program',
      issuer: 'CloudFactory',
      date: '2023',
      skills: ['Data Entry', 'Data Verification', 'Quality Assurance'],
    },
    {
      title: 'Python Programming',
      issuer: 'Self-Learning & Projects',
      date: '2023 - 2025',
      skills: ['Python', 'Data Processing', 'Automation'],
    },
    {
      title: 'Git & GitHub Version Control',
      issuer: 'Self-Learning',
      date: '2024',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    },
    {
      title: 'API Integration & Testing',
      issuer: 'Self-Learning',
      date: '2024',
      skills: ['REST APIs', 'Postman', 'API Testing'],
    },
    {
      title: 'Agile Development Fundamentals',
      issuer: 'Moringa School',
      date: '2025',
      skills: ['Agile', 'Scrum', 'Team Collaboration'],
    },
  ]

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Training</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-3xl p-6 glass-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{cert.date}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full glass text-gray-700 dark:text-gray-300 flex items-center gap-1"
                      >
                        <CheckCircle size={12} className="text-green-500" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
