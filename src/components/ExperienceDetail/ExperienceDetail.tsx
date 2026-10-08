import { Award, ChevronDown, GraduationCap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { certifications, education, jobs } from '../../data/journey'
import { cn, OPEN_DETAIL_EVENT } from '../../lib/content'
import type { Job } from '../../types/content'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

function JobCard({ job, open, onToggle }: { job: Job; open: boolean; onToggle: () => void }) {
  const panelId = `${job.id}-details`
  return (
    <article id={job.id} className="card scroll-mt-24 p-6 sm:p-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-ink">{job.company}</h3>
          {job.context && <p className="mt-1 text-muted">{job.context}</p>}
        </div>
        <p className="shrink-0 text-sm text-faint sm:text-right">
          <span className="block font-mono text-accent">{job.period}</span>
          {job.location}
        </p>
      </div>

      <ul className="mt-4 flex flex-col gap-1" aria-label="Positions">
        {job.positions.map((p) => (
          <li key={p.title} className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-medium text-ink">{p.title}</span>
            {job.positions.length > 1 && <span className="text-sm text-faint">{p.period}</span>}
          </li>
        ))}
      </ul>

      {/* Collapsible; content stays in the DOM so it prints and is searchable. */}
      <div
        id={panelId}
        className={cn(
          'detail-panel grid transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
        data-open={open}
      >
        <div className="min-h-0 overflow-hidden" inert={!open}>
          <ul className="mt-6 flex list-disc flex-col gap-2.5 pl-5 leading-relaxed text-muted marker:text-accent">
            {job.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {job.stack.map((s) => (
            <li key={s} className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
              {s}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="press print-hide inline-flex min-h-10 items-center gap-1.5 rounded-full border border-line-strong px-4 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          {open ? 'Hide details' : `Show details (${job.highlights.length})`}
          <ChevronDown size={15} aria-hidden className={cn('transition-transform duration-200 ease-out', open && 'rotate-180')} />
        </button>
      </div>
    </article>
  )
}

/** Full details for every role, degree and certification. Job cards start collapsed. */
export function ExperienceDetail() {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set())

  useEffect(() => {
    const onOpen = (e: Event) => {
      const id = (e as CustomEvent<string>).detail
      setOpenIds((cur) => (cur.has(id) ? cur : new Set(cur).add(id)))
    }
    window.addEventListener(OPEN_DETAIL_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_DETAIL_EVENT, onOpen)
  }, [])

  const toggle = (id: string) =>
    setOpenIds((cur) => {
      const next = new Set(cur)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <Section
      id="experience"
      eyebrow="Experience in detail"
      title="Every role, degree and certification."
      intro="Open any role for the full list of what I did there."
    >
      <div className="flex flex-col gap-5">
        {jobs.map((job) => (
          <Reveal key={job.id}>
            <JobCard job={job} open={openIds.has(job.id)} onToggle={() => toggle(job.id)} />
          </Reveal>
        ))}

        <Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="card p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                <GraduationCap size={19} className="text-accent" aria-hidden /> Education
              </h3>
              <ul className="mt-5 flex flex-col gap-5">
                {education.map((d) => (
                  <li key={d.id} id={d.id} className="scroll-mt-24">
                    <p className="font-medium text-ink">{d.school}</p>
                    <p className="text-muted">{d.degree}</p>
                    <p className="mt-0.5 text-sm text-faint">
                      <span className="font-mono text-accent">{d.period}</span> · {d.location}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                <Award size={19} className="text-accent" aria-hidden /> Certifications
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-3 text-muted">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
