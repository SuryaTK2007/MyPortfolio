"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Server, Shield, Cloud, Database } from 'lucide-react'
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
    ]
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
    ]
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20"
        >
          <h2 className="text-sm text-primary uppercase tracking-widest mb-4">Projects</h2>
          <p className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
            Featured Work
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group"
            >
              <div 
                className="glass-card rounded-3xl p-8 md:p-12 transition-all duration-500 glass-hover overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-10">
                  {/* Project Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4 tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-full glass-chip text-sm text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-10">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 glass-chip rounded-full text-foreground hover:bg-white/[0.12] transition-all duration-300"
                      >
                        <GithubIcon className="w-4 h-4" />
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
                            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                              <item.icon className="w-5 h-5 text-primary" />
                              <span className="text-sm text-foreground">{item.label}</span>
                            </div>
                            {i < project.architecture.length - 1 && (
                              <div className="flex justify-center py-2">
                                <div className="w-px h-4 bg-border" />
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
