"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Server, Shield, Cloud, Database, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons'

const projects = [
  {
    title: "DropURL",
    description: "A production-ready URL shortening platform that transforms long URLs into compact shareable links. Built with a focus on scalability, performance, and infrastructure automation.",
    techStack: ["Spring Boot", "React", "PostgreSQL", "Terraform"],
    features: [
      "Custom short URL generation",
      "Click analytics and tracking",
      "Rate limiting and security",
      "Infrastructure as Code"
    ],
    github: "https://github.com/suryatk2007/dropurl",
    architecture: [
      { icon: Server, label: "Spring Boot API" },
      { icon: Database, label: "PostgreSQL" },
      { icon: Cloud, label: "Terraform IaC" },
    ],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "violet",
  },
  {
    title: "DriftShield",
    description: "Cloud security automation tool that continuously detects and auto-remediates AWS configuration drift before it becomes a security incident. Built for DevSecOps teams.",
    techStack: ["Go", "AWS", "Cobra CLI", "Slack Webhooks"],
    features: [
      "Real-time drift detection",
      "Automated remediation",
      "Slack notifications",
      "Security compliance"
    ],
    github: "https://github.com/suryatk2007/driftshield",
    architecture: [
      { icon: Shield, label: "Go CLI Agent" },
      { icon: Cloud, label: "AWS Services" },
      { icon: Server, label: "Slack Webhooks" },
    ],
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    accentColor: "indigo",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10"
        >
          <h2 className="text-sm text-primary uppercase tracking-widest mb-4">Projects</h2>
          <p className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
            Featured Work
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group"
            >
              <div 
                className="liquid-glass rounded-3xl p-8 md:p-12 transition-all duration-700 glass-hover relative"
              >
                {/* Shine sweep on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
                
                <div className="flex flex-col lg:flex-row lg:items-start gap-10 relative z-10">
                  {/* Project Info */}
                  <div className="flex-1">
                    {/* Project number */}
                    <span className="text-xs text-muted-foreground/50 font-mono mb-4 block">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4 tracking-tight flex items-center gap-3">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </h3>

                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-full glass-chip text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-10">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.05 + 0.3 }}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-6 py-3 glass-chip rounded-full text-foreground hover:bg-white/[0.12] transition-all duration-300"
                      >
                        <GithubIcon className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="text-sm">View Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Architecture Visual */}
                  <div className="lg:w-72 shrink-0">
                    <div className="p-6 rounded-2xl glass overflow-hidden">
                      <h4 className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Architecture</h4>
                      <div className="space-y-3">
                        {project.architecture.map((item, i) => (
                          <div key={item.label}>
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 + 0.3 }}
                              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-primary/20 transition-colors duration-300"
                            >
                              <div className="p-2 rounded-lg bg-primary/10">
                                <item.icon className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-sm text-foreground">{item.label}</span>
                            </motion.div>
                            {i < project.architecture.length - 1 && (
                              <div className="flex justify-center py-2">
                                <motion.div
                                  initial={{ scaleY: 0 }}
                                  animate={isInView ? { scaleY: 1 } : {}}
                                  transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 + 0.5 }}
                                  className="w-px h-4 bg-gradient-to-b from-primary/40 to-transparent origin-top"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
