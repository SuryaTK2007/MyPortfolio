"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, Loader2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-sm text-primary uppercase tracking-widest mb-4">Contact</h2>
          <p className="text-3xl md:text-5xl font-medium text-foreground tracking-tight mb-6">
            Let&apos;s Build Something Great
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Currently looking for internship opportunities in backend development and cloud engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Send className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Message Sent</h3>
              <p className="text-muted-foreground">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-chip border-0 focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-chip border-0 focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground/50 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl glass-chip border-0 focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-lg hover:shadow-primary/25"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-10 pt-10 border-t border-border">
            <a
              href="https://github.com/suryatk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 glass-chip rounded-full text-muted-foreground hover:text-foreground hover:bg-white/[0.12] transition-all duration-300"
            >
              <GithubIcon className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/suryatk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 glass-chip rounded-full text-muted-foreground hover:text-foreground hover:bg-white/[0.12] transition-all duration-300"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:surya@example.com"
              className="flex items-center gap-2 px-5 py-2.5 glass-chip rounded-full text-muted-foreground hover:text-foreground hover:bg-white/[0.12] transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
