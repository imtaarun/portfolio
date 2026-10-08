import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowDown, Briefcase, GraduationCap } from 'lucide-react'
import { useRef } from 'react'
import { easeOutExpo } from '../../animations/variants'
import { milestones } from '../../data/journey'
import { cn, openDetail } from '../../lib/content'
import type { Milestone } from '../../types/content'
import { Section } from '../ui/Section'

function Item({ m, index }: { m: Milestone; index: number }) {
  const left = index % 2 === 0
  const Icon = m.kind === 'work' ? Briefcase : GraduationCap
  return (
    <li className="relative grid grid-cols-[2.5rem_1fr] gap-4 md:grid-cols-[1fr_3rem_1fr] md:gap-6">
      {/* dot */}
      <div className="relative z-10 col-start-1 row-start-1 flex justify-center pt-5 md:col-start-2">
        <motion.span
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px -30% 0px' }}
          transition={{ duration: 0.3, ease: easeOutExpo }}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full border-2 bg-card',
            m.kind === 'work' ? 'border-accent text-accent' : 'border-ink text-ink',
          )}
        >
          <Icon size={17} aria-hidden />
        </motion.span>
      </div>

      {/* card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -20% 0px' }}
        transition={{ duration: 0.5, ease: easeOutExpo }}
        className={cn(
          'col-start-2 row-start-1 min-w-0',
          left ? 'md:col-start-1' : 'md:col-start-3',
        )}
      >
        <div className="card card-hover p-5 sm:p-6">
          <p className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-mono text-accent">{m.period}</span>
            <span
              className={cn(
                'rounded-full px-2 py-0.5 text-xs font-medium',
                m.kind === 'work' ? 'bg-accent-soft text-accent' : 'bg-page text-ink ring-1 ring-line',
              )}
            >
              {m.kind === 'work' ? 'Experience' : 'Education'}
            </span>
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{m.org}</h3>
          <p className="mt-0.5 font-medium text-ink/80">{m.title}</p>
          <p className="mt-1 text-sm text-faint">{m.location}</p>
          <p className="mt-3 leading-relaxed text-muted">{m.summary}</p>
          <a
            href={`#${m.detailId}`}
            onClick={(e) => {
              e.preventDefault()
              openDetail(m.detailId)
            }}
            className="group mt-4 inline-flex items-center gap-1.5 rounded text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            View details <ArrowDown size={14} aria-hidden className="transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </li>
  )
}

/** Scroll-driven timeline of all experience and education, oldest first. */
export function Journey() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 55%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <Section
      id="journey"
      eyebrow="My journey"
      title="My path so far."
      intro="My experience and education, most recent first. Select any step to open its full details further down."
      className="bg-card"
    >
      <ol ref={ref} className="relative flex flex-col gap-8 md:gap-6">
        {/* track and scroll-linked fill */}
        <span aria-hidden className="absolute bottom-0 left-5 top-0 w-0.5 -translate-x-1/2 rounded bg-line md:left-1/2" />
        <motion.span
          aria-hidden
          style={{ scaleY: progress }}
          className="absolute bottom-0 left-5 top-0 w-0.5 origin-top -translate-x-1/2 rounded bg-accent md:left-1/2"
        />
        {milestones.map((m, i) => (
          <Item key={m.id} m={m} index={i} />
        ))}
      </ol>
    </Section>
  )
}
