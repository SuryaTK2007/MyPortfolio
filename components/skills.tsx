"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "Go"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "REST APIs", "Bun"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "AWS S3", "AWS SES", "IAM", "Docker", "GitHub Actions", "Terraform", "Vercel"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Core CS",
    skills: ["DSA", "OOP", "DBMS", "System Design"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20"
        >
          <h2 className="text-sm text-primary uppercase tracking-widest mb-4">Skills</h2>
          <p className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
            Technologies I Work With
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="px-5 py-2.5 glass-chip rounded-full text-sm text-foreground hover:bg-white/[0.12] transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
