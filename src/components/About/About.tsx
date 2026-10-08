import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../../animations/variants'
import { profile } from '../../data/profile'
import { Section } from '../ui/Section'

export function About() {
  const { paragraphs, stats } = profile.about
  return (
    <Section id="about" eyebrow="About" title="Full-stack engineer who likes the hard middle of a system.">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4 text-lg leading-relaxed text-muted"
        >
          {paragraphs.map((p, i) => (
            <motion.p key={i} variants={fadeUp}>
              {p}
            </motion.p>
          ))}
        </motion.div>
        <motion.dl
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 self-start border-t border-line"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="flex flex-col-reverse gap-1 border-b border-line py-5 pr-4 [&:nth-child(odd)]:border-r [&:nth-child(even)]:pl-5">
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-ink tabular-nums">{s.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </Section>
  )
}
