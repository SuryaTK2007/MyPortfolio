"use client"

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 border-t border-border relative">
      {/* Subtle gradient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/[0.02] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/suryatk2007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-chip hover:bg-white/[0.12] transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/surya-tk-9b002530a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-chip hover:bg-white/[0.12] transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              Designed & Built with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> by Surya TK
            </span>
            <span className="hidden md:inline">·</span>
            <span>&copy; {currentYear} All rights reserved.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
