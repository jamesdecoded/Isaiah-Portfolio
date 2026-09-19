'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  User,
  FolderGit2,
  Sparkles,
  Briefcase,
  Award,
  Mail,
  Download,
  Github,
  Linkedin,
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

type PaletteItem = {
  id: string
  label: string
  hint: string
  icon: typeof User
  action: () => void
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const items: PaletteItem[] = useMemo(
    () => [
      { id: 'about', label: 'Go to About', hint: 'Section', icon: User, action: () => scrollTo('about') },
      { id: 'projects', label: 'Go to Projects', hint: 'Section', icon: FolderGit2, action: () => scrollTo('projects') },
      { id: 'skills', label: 'Go to Skills', hint: 'Section', icon: Sparkles, action: () => scrollTo('skills') },
      { id: 'experience', label: 'Go to Experience', hint: 'Section', icon: Briefcase, action: () => scrollTo('experience') },
      { id: 'certifications', label: 'Go to Certifications', hint: 'Section', icon: Award, action: () => scrollTo('certifications') },
      { id: 'contact', label: 'Go to Contact', hint: 'Section', icon: Mail, action: () => scrollTo('contact') },
      {
        id: 'resume',
        label: 'Download Resume',
        hint: 'Action',
        icon: Download,
        action: () => {
          const link = document.createElement('a')
          link.href = '/resume.pdf'
          link.download = 'Isaiah_James_Resume.pdf'
          link.click()
          setOpen(false)
        },
      },
      {
        id: 'email',
        label: 'Email Me',
        hint: 'jamesisaiah164@gmail.com',
        icon: Mail,
        action: () => {
          window.location.href = 'mailto:jamesisaiah164@gmail.com'
          setOpen(false)
        },
      },
      {
        id: 'github',
        label: 'Open GitHub',
        hint: 'External link',
        icon: Github,
        action: () => {
          window.open('https://github.com/jamesdecoded', '_blank', 'noopener,noreferrer')
          setOpen(false)
        },
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn',
        hint: 'External link',
        icon: Linkedin,
        action: () => {
          window.open('https://www.linkedin.com/in/james-isaiah-11571433a', '_blank', 'noopener,noreferrer')
          setOpen(false)
        },
      },
    ],
    []
  )

  const filtered = query.trim()
    ? items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
    : items

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setSelected(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    setSelected(0)
  }, [query])

  const handleKeyNav = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected((prev) => (prev + 1) % Math.max(filtered.length, 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected((prev) => (prev - 1 + filtered.length) % Math.max(filtered.length, 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      filtered[selected]?.action()
    }
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center bg-black/50 backdrop-blur-sm pt-24 px-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-lg glass rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-300/30 dark:border-white/10">
                <Search size={18} className="text-gray-400 flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyNav}
                  placeholder="Jump to a section or run an action..."
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400"
                />
                <kbd className="text-[10px] px-1.5 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-gray-400">esc</kbd>
              </div>

              <div className="max-h-80 overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <p className="px-4 py-6 text-sm text-center text-gray-400">No matches.</p>
                )}
                {filtered.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => item.action()}
                    onMouseEnter={() => setSelected(idx)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                      idx === selected
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                        : 'hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <item.icon size={16} className="flex-shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    <span className="text-xs text-gray-400">{item.hint}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
