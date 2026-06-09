"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, TrendingUp } from 'lucide-react'

const profiles = [
  {
    name: "LeetCode",
    stats: [
      { label: "Max Rating", value: "1560" },
      { label: "Problems", value: "325+" },
    ],
    url: "https://leetcode.com/suryatk",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    accent: "text-amber-400",
  },
  {
    name: "GeeksforGeeks",
    stats: [{ label: "Problems", value: "275+" }],
    url: "https://geeksforgeeks.org/user/suryatk",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    accent: "text-emerald-400",
  },
  {
    name: "SkillRack",
    stats: [{ label: "Problems", value: "1457+" }],
    url: "https://www.skillrack.com/faces/resume.xhtml?id=515098&key=4e1897f604408303154b382d2b5170e8e63c9a45",
    gradient: "from-blue-500/20 via-sky-500/10 to-transparent",
    accent: "text-sky-400",
  },
];

export function CodingProfiles() {
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
          <h2 className="text-sm text-primary uppercase tracking-widest mb-4">Coding Profiles</h2>
          <p className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
            Competitive Programming
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group glass-card rounded-2xl p-8 transition-all duration-300 glass-hover overflow-hidden relative"
            >
              {/* Shine sweep on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-foreground">{profile.name}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
                </div>
                
                <div className="space-y-4">
                  {profile.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                        <span className="text-2xl font-medium text-foreground">{stat.value}</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "100%" } : {}}
                          transition={{ duration: 1.5, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary/60 to-primary/20 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
