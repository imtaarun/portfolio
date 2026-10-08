import { Check } from 'lucide-react'
import { topWork } from '../../data/highlights'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

/** The three pieces of work I'm proudest of. */
export function TopWork() {
  return (
    <Section
      id="work"
      eyebrow="Top work"
      title="Three projects I'm proudest of."
      intro="One from each company, and what changed because of it."
    >
      <ol className="grid gap-5 lg:grid-cols-3">
        {topWork.map((w, i) => (
          <Reveal as="li" key={w.id} delay={i * 0.08} className="min-w-0">
            <article className="card card-hover flex h-full flex-col p-6 sm:p-7">
              <p className="flex items-center justify-between text-sm"><span className="font-medium text-accent">{w.org}</span><span className="font-mono text-faint">0{i + 1}</span></p>
              <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-ink">{w.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{w.summary}</p>
              <ul className="mt-5 flex flex-col gap-2 text-sm text-ink/85">
                {w.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t border-line pt-5">
                  {w.result.value && <span className="text-3xl font-semibold tracking-tight text-ink">{w.result.value}</span>}
                  <span className={w.result.value ? 'text-sm text-muted' : 'font-medium leading-snug text-ink'}>{w.result.label}</span>
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {w.stack.map((s) => (
                    <li key={s} className="rounded-md bg-page px-2 py-0.5 text-xs text-muted ring-1 ring-line">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
