'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming & Development',
      skills: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'OOP', 'REST APIs'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git/GitHub', 'VS Code', 'Linux CLI', 'Postman', 'Docker', 'JIRA/Trello'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Data & Analytics',
      skills: ['Data Entry & Verification', 'Data Annotation', 'Data Analytics', 'Data Visualization', 'Transcription'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Soft Skills & Practices',
      skills: ['Agile/Scrum', 'Team Collaboration', 'Debugging & Testing', 'Code Documentation', 'Time Management'],
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-3xl p-8 glass-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + skillIdx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-xl glass glass-hover text-sm font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
