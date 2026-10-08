import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { easeOutExpo, viewportOnce } from '../../animations/variants'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'article'
}

/** Fades and lifts its content in once, when it scrolls into view. */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay, ease: easeOutExpo }}
    >
      {children}
    </Component>
  )
}
