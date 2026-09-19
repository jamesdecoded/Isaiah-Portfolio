'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Wrench } from 'lucide-react'

export default function About() {
  const techStack = [
    { category: 'AI Evaluation', icon: Code2, items: ['LLM Output Evaluation', 'Benchmark/Task Authoring', 'Rubric Design', 'Error Classification'] },
    { category: 'Programming & Data', icon: Database, items: ['Python', 'JavaScript', 'SQL', 'CSV Processing'] },
    { category: 'Backend & Tools', icon: Wrench, items: ['REST APIs', 'Flask', 'Git/GitHub', 'Docker'] },
    { category: 'Work Practices', icon: Code2, items: ['QA/QC', 'Agile/Scrum', 'Async Communication', 'Documentation'] },
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
              Software engineer and AI data evaluation specialist with over two years of experience improving data quality and building Python-based workflows. At CloudFactory, I redesigned our verification process and lifted data accuracy by 20%.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              These days I write benchmark tasks and evaluation rubrics for AI training platforms, working independently, hitting deadlines, and giving clear, structured feedback across annotation and QA work.
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
              I build coding benchmarks that test AI-generated code for correctness, efficiency, and instruction-following, and I review model outputs for accuracy and reasoning quality. I also write annotation guidelines and label datasets, covering tricky edge cases deliberately.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I juggle several contractor engagements at once, working independently and consistently hitting submission deadlines, with a documentation-first, async-friendly approach.
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
            Building AI evaluation workflows and software solutions with <span className="font-bold text-blue-600 dark:text-blue-400">Python</span>, REST APIs, and modern web technologies. Experienced in LLM evaluation, data quality, and creating tools that solve real-world problems.
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
