"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Server, Monitor, Cloud, Database, BookOpen } from 'lucide-react'

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "C++", "Java"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "REST APIs", "Bun"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "Next.js"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS EC2", "AWS S3", "AWS SES", "IAM", "Docker", "GitHub Actions", "Terraform", "Vercel"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Core CS",
    icon: BookOpen,
    skills: ["DSA", "OOP", "DBMS", "System Design"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-16 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10"
        >
          <h2 className="text-sm text-primary uppercase tracking-widest mb-4">Skills</h2>
          <p className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
            Technologies I Work With
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-6 glass-hover overflow-hidden group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm text-foreground font-medium uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="px-3.5 py-1.5 glass-chip rounded-full text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 cursor-default"
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
