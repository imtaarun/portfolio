import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { easeOutExpo } from '../../animations/variants'
import { profile, resume } from '../../data/profile'
import { publicPath, scrollToId } from '../../lib/content'
import { LinkedinIcon } from '../ui/BrandIcons'
import { Button } from '../ui/Button'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: easeOutExpo },
})

export function Hero() {
  return (
    <section id="top" aria-labelledby="top-heading" className="relative overflow-hidden border-b border-line px-5 pb-16 pt-32 sm:px-8 md:pb-28 md:pt-40">
      <div className="relative mx-auto max-w-5xl">
        {profile.availability.show && (
          <motion.p
            {...rise(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-sm text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-ok" aria-hidden />
            {profile.availability.label}
          </motion.p>
        )}
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            <motion.h1
              id="top-heading"
              {...rise(0.05)}
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl"
            >
              {profile.fullName}
              <span className="mt-3 block text-2xl font-medium tracking-tight text-accent sm:text-3xl">{profile.role}</span>
            </motion.h1>
            <motion.p {...rise(0.08)} className="mt-3 font-mono text-sm uppercase tracking-[0.1em] text-faint">
              {profile.focus}
            </motion.p>
            <motion.p {...rise(0.12)} className="mt-7 max-w-2xl text-xl font-medium leading-snug text-ink sm:text-2xl">
              {profile.hero.headline}
            </motion.p>
            <motion.p {...rise(0.16)} className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              {profile.hero.supporting}
            </motion.p>
          </div>

          {profile.now.length > 0 && (
            <motion.dl {...rise(0.2)} className="card shadow-raised divide-y divide-line self-end">
              {profile.now.map((row) => (
                <div key={row.label} className="flex flex-col gap-0.5 px-5 py-4">
                  <dt className="eyebrow">{row.label}</dt>
                  <dd className="font-medium text-ink">{row.value}</dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>

        <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
          <Button href={publicPath(resume.file)} download={resume.downloadName} icon={<Download size={15} aria-hidden />}>
            Download resume
          </Button>
          <Button
            variant="secondary"
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('contact')
            }}
            icon={<Mail size={15} aria-hidden />}
          >
            Contact me
          </Button>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="press inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-card text-ink transition-colors hover:border-ink"
          >
            <LinkedinIcon size={16} />
          </a>
        </motion.div>

        <motion.div
          {...rise(0.34)}
          className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5 text-sm text-muted"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} aria-hidden /> {profile.location}
          </span>
          <button
            type="button"
            onClick={() => scrollToId('journey')}
            className="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-accent"
          >
            See my journey <ArrowDown size={15} aria-hidden />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
