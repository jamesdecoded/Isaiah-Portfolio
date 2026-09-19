'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Download, FileText, X } from 'lucide-react'
import { useState } from 'react'
import EvaluationConsole from './EvaluationConsole'

export default function Hero() {
  const [showResume, setShowResume] = useState(false)

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="w-full min-w-0 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-32 h-32 mx-auto rounded-full glass border-4 border-white/30 dark:border-white/20 overflow-hidden"
          >
            <img
              src="/og-image.png"
              alt="Isaiah James"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Isaiah James
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl gradient-text font-semibold mb-6"
        >
          AI Data Evaluation Specialist | Software Engineer
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Software engineer and AI data evaluation specialist with 2+ years improving data quality and building Python-based workflows. Writing benchmark tasks and evaluation rubrics for AI training platforms.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="px-8 py-4 gradient-bg text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowResume(true)}
            className="px-8 py-4 glass glass-hover rounded-2xl font-semibold flex items-center gap-2"
          >
            <FileText size={20} />
            Preview Resume
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download="Isaiah_James_Resume.pdf"
            className="px-8 py-4 glass glass-hover rounded-2xl font-semibold flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <AnimatePresence>
          {showResume && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 md:p-10"
              onClick={() => setShowResume(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl h-full max-h-[85vh] glass rounded-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowResume(false)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-xl glass glass-hover"
                  aria-label="Close resume preview"
                >
                  <X size={20} />
                </button>
                <iframe
                  src="/resume.pdf"
                  title="Resume preview"
                  className="w-full h-full bg-white"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <EvaluationConsole />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10"
        >
          <ChevronDown className="mx-auto animate-bounce text-gray-400" size={32} />
        </motion.div>
      </div>
    </section>
  )
}
