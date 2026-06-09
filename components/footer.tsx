"use client"

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-sm text-muted-foreground">
            Designed & Built by Surya TK
          </div>

          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
