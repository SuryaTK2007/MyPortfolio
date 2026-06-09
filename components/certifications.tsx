"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: "Cloud Infrastructure: Startup to Scale",
    issuer: "Frontend Masters",
    color: "from-sky-500/20 to-sky-500/0",
  },
  {
    title: "Data Structures and Algorithms using C and C++",
    issuer: "Udemy",
    color: "from-violet-500/20 to-violet-500/0",
  },
  {
    title: "SQL Advanced",
    issuer: "HackerRank",
    color: "from-emerald-500/20 to-emerald-500/0",
  },
  {
    title: "The Last Algorithms Course You'll Need",
    issuer: "Frontend Masters",
    color: "from-sky-500/20 to-sky-500/0",
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10"
        >
          <h2 className="text-sm text-primary uppercase tracking-widest mb-4">Certifications</h2>
          <p className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
            Professional Credentials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-6 transition-all duration-300 glass-hover overflow-hidden relative group"
            >
              {/* Shine sweep on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>

              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
