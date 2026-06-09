"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
  {
    year: "2024",
    title: "Started Engineering",
    description: "Began B.E. in Computer Science at Sri Eshwar College of Engineering",
  },
  {
    year: "2025",
    title: "MERN Internship",
    description: "Completed full-stack development internship",
  },
  {
    year: "2025",
    title: "Hackathon Wins",
    description: "Won Freshathon and SelfE hackathons",
  },
  {
    year: "2026",
    title: "Built DropURL & DriftShield",
    description: "Developed production-ready projects",
  },
  {
    year: "Future",
    title: "Backend & Cloud Engineer",
    description: "Aspiring full-time role",
  },
]

export function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm text-primary uppercase tracking-widest mb-4">Journey</h2>
          <p className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
            Engineering Timeline
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year + milestone.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <span className="text-sm text-primary font-medium">{milestone.year}</span>
                  <h3 className="text-lg font-medium text-foreground mt-1 mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-[#080808]" />

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
