'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 shadow-lg">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold cursor-pointer relative"
            onClick={() => scrollTo('hero')}
          >
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {['D', 'e', 'v', 'W', 'i', 't', 'h', 'J', 'a', 'm', 'e', 's'].map((char, i) => (
                <motion.span
                  key={i}
                  className="gradient-text inline-block"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: [0, 1, 1],
                    y: [-20, 0, 0],
                    textShadow: [
                      '0 0 0px rgba(59, 130, 246, 0)',
                      '0 0 10px rgba(59, 130, 246, 0.8)',
                      '0 0 0px rgba(59, 130, 246, 0)',
                    ],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-xl glass glass-hover"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
