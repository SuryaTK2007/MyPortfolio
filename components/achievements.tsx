"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Medal } from 'lucide-react'

const achievements = [
  {
    position: "1st Place",
    title: "Freshathon Hackathon",
    // description: "Won first place among 200+ participants",
    icon: Trophy,
    gradient: "from-amber-500/20 to-amber-500/0",
    ring: "ring-amber-500/20",
  },
  {
    position: "1st Place",
    title: "SelfE Hackathon",
    // description: "First place for self-improvement application",
    icon: Trophy,
    gradient: "from-amber-500/20 to-amber-500/0",
    ring: "ring-amber-500/20",
  },
  {
    position: "3rd Place",
    title: "Creatathon Hackathon",
    // description: "Bronze medal for innovative solution",
    icon: Medal,
    gradient: "from-orange-500/15 to-orange-500/0",
    ring: "ring-orange-500/20",
  },
]

export function Achievements() {
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
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-8 transition-all duration-300 glass-hover overflow-hidden relative group"
            >
              {/* Shine sweep on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-primary/10 ring-1 ${achievement.ring} group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-primary font-medium">{achievement.position}</span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {achievement.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
