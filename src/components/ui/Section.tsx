import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, stagger, viewportOnce } from '../../animations/variants'
import { cn } from '../../lib/content'

interface SectionProps {
  id: string
  eyebrow?: string
  title?: ReactNode
  intro?: ReactNode
  children: ReactNode
  className?: string
}

/** Standard page section: anchor id, small label, heading and intro. */
export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={cn('relative scroll-mt-20 px-5 py-20 sm:px-8 md:py-28', className)}
    >
      <div className="mx-auto max-w-5xl">
        {(eyebrow || title) && (
          <motion.header
            className="mb-10 max-w-2xl md:mb-14"
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {eyebrow && (
              <motion.p variants={fadeUp} className="eyebrow mb-3 text-accent">
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2 id={headingId} variants={fadeUp} className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {title}
              </motion.h2>
            )}
            {intro && (
              <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {intro}
              </motion.p>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  )
}
