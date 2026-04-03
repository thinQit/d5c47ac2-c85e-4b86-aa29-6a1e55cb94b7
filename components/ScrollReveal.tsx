'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children?: ReactNode
  className?: string
}

export default function ScrollReveal({ children = null, className = '' }: Partial<ScrollRevealProps>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.div>
  )
}
