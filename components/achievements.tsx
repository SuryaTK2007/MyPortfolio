"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Medal } from 'lucide-react'

const achievements = [
  {
    position: "1st Place",
    title: "Freshathon Hackathon",
    description: "Won first place among 200+ participants",
    icon: Trophy,
  },
  {
    position: "1st Place",
    title: "SelfE Hackathon",
    description: "First place for self-improvement application",
    icon: Trophy,
  },
  {
    position: "3rd Place",
    title: "Creatathon Hackathon",
    description: "Bronze medal for innovative solution",
    icon: Medal,
  },
]

export function Achievements() {
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
          <h2 className="text-sm text-primary uppercase tracking-widest mb-4">Achievements</h2>
          <p className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
            Recognition & Awards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-8 transition-all duration-300 glass-hover overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <achievement.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-primary font-medium">{achievement.position}</span>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
