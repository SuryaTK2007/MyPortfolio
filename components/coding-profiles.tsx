"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const profiles = [
  {
    name: "LeetCode",
    stats: [
      { label: "Max Rating", value: "1560" },
      { label: "Problems", value: "325+" },
    ],
    url: "https://leetcode.com/suryatk",
  },
  {
    name: "GeeksforGeeks",
    stats: [{ label: "Problems", value: "275+" }],
    url: "https://geeksforgeeks.org/user/suryatk",
  },
  {
    name: "SkillRack",
    stats: [{ label: "Problems", value: "1457+" }],
    url: "https://www.skillrack.com/faces/resume.xhtml?id=515098&key=4e1897f604408303154b382d2b5170e8e63c9a45",
  },
];

export function CodingProfiles() {
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
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group glass-card rounded-2xl p-8 transition-all duration-300 glass-hover overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-foreground">
                  {profile.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              
              <div className="space-y-4">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="text-2xl font-medium text-foreground">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
