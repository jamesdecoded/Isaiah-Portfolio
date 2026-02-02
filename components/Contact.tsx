'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone, MessageCircle, Instagram } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const instagramUsername = 'yg.grammy._'
  
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'jamesisaiah164@gmail.com', href: 'mailto:jamesisaiah164@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+254768187542', href: 'tel:+254768187542' },
    { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: null },
  ]

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/jamesdecoded' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/james-isaiah-11571433a' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/254768187542' },
    { icon: Instagram, label: 'Instagram', href: `https://instagram.com/${instagramUsername}` },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission from Portfolio',
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl glass glass-hover flex items-center justify-center">
                      <info.icon className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass glass-hover flex items-center justify-center"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass glass-hover bg-white/5 dark:bg-black/20 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass glass-hover bg-white/5 dark:bg-black/20 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass glass-hover bg-white/5 dark:bg-black/20 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              {status === 'success' && (
                <div className="p-3 rounded-xl bg-green-500/20 text-green-600 dark:text-green-400 text-sm">
                  ✓ Message sent successfully!
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-red-500/20 text-red-600 dark:text-red-400 text-sm">
                  ✗ Failed to send message. Please try again.
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 gradient-bg text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-gray-500 dark:text-gray-400">
            © 2026 Isaiah James. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
