'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Wrench } from 'lucide-react'

export default function About() {
  const techStack = [
    { category: 'Languages', icon: Code2, items: ['Python', 'HTML', 'CSS', 'JavaScript'] },
    { category: 'Data & Analytics', icon: Database, items: ['Data Processing', 'Data Visualization', 'Data Annotation', 'Analytics'] },
    { category: 'Tools', icon: Wrench, items: ['Git/GitHub', 'VS Code', 'Linux', 'Postman'] },
    { category: 'Interests', icon: Code2, items: ['Machine Learning', 'Cloud Computing', 'Automation', 'Open Source'] },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 glass-hover"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Junior Software Engineer and Data Specialist with 2+ years at CloudFactory working on data entry, annotation, and analytics projects. My journey into software engineering began with a passion for solving problems and building efficient solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently expanding my skills at Moringa School, learning Python, web development, APIs, databases, and software design. I enjoy building practical software solutions and collaborating with teams to deliver quality results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 glass-hover"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">What I Bring</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm skilled in Python, front-end development, and APIs. I have hands-on experience building web apps, Python data tools, and API-based projects. Comfortable with debugging, version control, and writing clean code.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Reliable, detail-oriented, and able to work well in teams or independently. I'm passionate about learning new technologies and delivering practical solutions that make a difference.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold mb-2 text-center gradient-text">Technical Focus</h3>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Building efficient software solutions with <span className="font-bold text-blue-600 dark:text-blue-400">Python</span>, web technologies, and APIs. Experienced in data processing, automation, and creating tools that solve real-world problems. Passionate about clean code and continuous learning.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {techStack.map((stack, idx) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl glass glass-hover flex items-center justify-center">
                  <stack.icon className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <h4 className="font-semibold mb-3">{stack.category}</h4>
                <div className="space-y-2">
                  {stack.items.map((item) => (
                    <div key={item} className="text-sm text-gray-600 dark:text-gray-400">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
