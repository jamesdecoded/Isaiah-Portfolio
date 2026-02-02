'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Wrench } from 'lucide-react'

export default function About() {
  const techStack = [
    { category: 'Frontend', icon: Code2, items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS'] },
    { category: 'Backend', icon: Code2, items: ['Python', 'FastAPI', 'Node.js'] },
    { category: 'Database', icon: Database, items: ['PostgreSQL', 'MySQL', 'SQL', 'SQLAlchemy'] },
    { category: 'Tools', icon: Wrench, items: ['Git/GitHub', 'RESTful APIs', 'Postman', 'Pydantic'] },
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
              My journey into software engineering began with a fascination for how the modern web scales. I didn't just want to build pages; I wanted to build systems. This led me to master the art of bridging the gap between sleek, responsive frontends and robust, high-speed backends.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              What drives me is the "logic puzzle" of coding—taking a complex business problem and decomposing it into clean, maintainable, and efficient functions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 glass-hover"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">What Makes Me Unique</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              What makes me unique is my focus on modern performance. While many developers stick to older frameworks, I've specialized in FastAPI because I value type safety, speed, and asynchronous programming.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I don't just write code that works; I write code that is optimized for the future. I am a developer who views every project through the lens of both the end-user's experience and the developer's long-term maintenance.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold mb-2 text-center gradient-text">Superpower</h3>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Backend API Development with <span className="font-bold text-blue-600 dark:text-blue-400">FastAPI</span>. I excel at creating high-concurrency endpoints and integrating them with relational databases using SQL. I have a deep understanding of data validation and automated documentation (Swagger/OpenAPI).
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
