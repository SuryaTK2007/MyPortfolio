"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award } from 'lucide-react'

const certifications = [
  {
    title: "Cloud Infrastructure: Startup to Scale",
    issuer: "Frontend Masters",
  },
  {
    title: "Data Structures and Algorithms using C and C++",
    issuer: "Udemy",
  },
  {
    title: "SQL Advanced",
    issuer: "HackerRank",
  },
  {
    title: "The Last Algorithms Course You'll Need",
    issuer: "Frontend Masters",
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20"
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
              className="glass-card rounded-2xl p-6 transition-all duration-300 glass-hover overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
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
