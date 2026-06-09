"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-10"
        >
          <h2 className="text-sm text-primary uppercase tracking-widest mb-4">Contact</h2>
          <p className="text-3xl md:text-5xl font-medium text-foreground tracking-tight mb-6">
            Let&apos;s Build Something Great
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Currently looking for internship opportunities in full stack development, cloud infrastructure, and DevOps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="liquid-glass rounded-3xl p-8 md:p-12"
        >
          {/* Social Links */}
          <div className="flex flex-col items-center gap-8">
            <p className="text-muted-foreground text-center">
              Reach out via any of these platforms — I&apos;d love to connect.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://github.com/suryatk2007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 glass-chip rounded-full text-muted-foreground hover:text-foreground hover:bg-white/[0.08] transition-all duration-500 group"
              >
                <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/surya-tk-9b002530a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 glass-chip rounded-full text-muted-foreground hover:text-foreground hover:bg-white/[0.08] transition-all duration-500 group"
              >
                <LinkedinIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:suryatk2007@gmail.com"
                className="flex items-center gap-2 px-6 py-3 glass-chip rounded-full text-muted-foreground hover:text-foreground hover:bg-white/[0.08] transition-all duration-500 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
