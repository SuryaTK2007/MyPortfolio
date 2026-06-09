"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-sm text-primary uppercase tracking-widest mb-8">About</h2>
          
          <div className="space-y-8">
            <p className="text-3xl md:text-4xl font-medium text-foreground leading-relaxed tracking-tight">
              Engineering student at Sri Eshwar College of Engineering, passionate about building 
              <span className="text-primary"> robust and scalable</span> software systems.
            </p>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                My focus lies at the intersection of backend development, cloud infrastructure, 
                and distributed systems. I enjoy solving complex engineering problems and 
                building tools that make developers&apos; lives easier.
              </p>
              <p>
                With hands-on experience in AWS, Docker, Terraform, and modern backend frameworks 
                like Spring Boot and Go, I&apos;m constantly pushing the boundaries of what&apos;s 
                possible in cloud-native development.
              </p>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border"
          >
            {[
              { value: "325+", label: "LeetCode Problems" },
              { value: "3", label: "Hackathon Wins" },
              { value: "2", label: "Production Projects" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-3xl md:text-4xl font-medium text-foreground mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
