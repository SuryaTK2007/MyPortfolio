"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-16 relative">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-sm text-primary uppercase tracking-widest mb-8">About</h2>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-[340px] shrink-0"
            >
              <div className="liquid-glass rounded-3xl p-3">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Surya TK"
                    fill
                    className="object-cover object-top"
                    sizes="340px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium text-lg">Surya TK</p>
                    <p className="text-white/70 text-sm">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Text content */}
            <div className="flex-1 space-y-6">
              <p className="text-2xl md:text-3xl font-medium text-foreground leading-snug tracking-tight">
                Full stack developer passionate about
                <span className="text-primary"> cloud infrastructure</span> &
                <span className="text-primary"> DevOps</span>.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                CS Engineering student at Sri Eshwar College of Engineering. I build 
                end-to-end applications using React, Spring Boot, Go, AWS, Docker, and Terraform.
              </p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
              >
                {[
                  { value: "350+", label: "LeetCode" },
                  { value: "3", label: "Hackathons Won" },
                  { value: "5+", label: "Certifications" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="text-3xl md:text-4xl font-medium text-foreground mb-1">
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
