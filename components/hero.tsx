"use client"

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle ambient purple glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle 3D sphere in background */}
      <motion.div
        className="absolute top-1/4 right-[15%] w-32 h-32 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.02) 70%)",
          boxShadow:
            "inset -20px -20px 40px rgba(0,0,0,0.3), inset 10px 10px 30px rgba(139, 92, 246, 0.1)",
        }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          {/* Floating glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass-card rounded-3xl p-12 md:p-16 max-w-3xl mx-auto overflow-hidden"
          >
            {/* Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-chip mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-5xl md:text-7xl font-medium text-foreground mb-6 tracking-tight"
            >
              Surya TK
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-primary font-medium mb-8"
            >
              Backend & Cloud Engineer
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
            >
              I build scalable backend systems and cloud-native applications.
              Focused on performance, reliability, and elegant engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass-chip rounded-full font-medium text-foreground hover:bg-white/[0.12] transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center justify-center gap-4"
            >
              <a
                href="https://github.com/suryatk2007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-chip hover:bg-white/[0.12] transition-all duration-300 text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/surya-tk-9b002530a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-chip hover:bg-white/[0.12] transition-all duration-300 text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
