"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Briefcase, Trophy, Rocket, Star } from 'lucide-react'

const milestones = [
  {
    year: "2024",
    title: "Started Engineering",
    description: "Began B.E. in Computer Science at Sri Eshwar College of Engineering",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "MERN Internship",
    description: "Completed full-stack development internship",
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "Hackathon Wins",
    description: "Won Freshathon and SelfE hackathons",
    icon: Trophy,
  },
  {
    year: "2026",
    title: "Built DropURL & DriftShield",
    description: "Developed production-ready projects",
    icon: Rocket,
  },
  {
    year: "Future",
    title: "Full Stack Developer",
    description: "Aspiring full-time role",
    icon: Star,
  },
]

export function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10 text-center"
        >
          <h2 className="text-sm text-primary uppercase tracking-widest mb-4">Journey</h2>
          <p className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
            Engineering Timeline
          </p>
        </motion.div>

        <div className="space-y-0">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year + milestone.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-stretch gap-0"
            >
              {/* Icon column — fixed width, vertically centered icon with connecting line */}
              <div className="flex flex-col items-center w-12 shrink-0">
                {/* Top connector line */}
                <div className={`w-px flex-1 ${index === 0 ? 'bg-transparent' : 'bg-primary/20'}`} />
                {/* Icon dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
                  className="w-10 h-10 rounded-full bg-[#080808] border-2 border-primary/40 flex items-center justify-center shrink-0 my-1"
                >
                  <milestone.icon className="w-4 h-4 text-primary" />
                </motion.div>
                {/* Bottom connector line */}
                <div className={`w-px flex-1 ${index === milestones.length - 1 ? 'bg-transparent' : 'bg-primary/20'}`} />
              </div>

              {/* Content */}
              <div className="flex-1 py-3 pl-4">
                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.3 } }}
                  className="glass-card rounded-2xl p-5 overflow-hidden"
                >
                  <span className="text-sm text-primary font-medium">{milestone.year}</span>
                  <h3 className="text-lg font-medium text-foreground mt-1 mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
