import { CheckCircle2 } from 'lucide-react'
import { challenges } from '../../data/highlights'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

const label = 'text-xs font-semibold uppercase tracking-[0.12em]'

/** Two hard problems and how I solved them. */
export function Challenges() {
  return (
    <Section
      id="challenges"
      eyebrow="Challenges"
      title="Two hard problems I solved."
      intro="One from my current role and one from SITA: what went wrong, why it was hard and what I did."
      className="bg-card"
    >
      <div className="flex flex-col gap-6">
        {challenges.map((c, i) => (
          <Reveal key={c.id}>
            <article className="card overflow-hidden !bg-page">
              <header className="border-b border-line p-6 sm:p-8">
                <p className="text-sm text-faint">
                  Challenge {i + 1} · {c.org}
                </p>
                <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-ink">{c.title}</h3>
              </header>
              <div className="grid md:grid-cols-2">
                <div className="flex flex-col gap-5 border-b border-line p-6 sm:p-8 md:border-b-0 md:border-r">
                  <div>
                    <p className={`${label} text-ink`}>The problem</p>
                    <p className="mt-2 leading-relaxed text-muted">{c.problem}</p>
                  </div>
                  <div>
                    <p className={`${label} text-faint`}>Why it was hard</p>
                    <p className="mt-2 leading-relaxed text-muted">{c.whyHard}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5 bg-card/70 p-6 sm:p-8">
                  <div>
                    <p className={`${label} text-accent`}>How I solved it</p>
                    <ol className="mt-3 flex flex-col gap-3">
                      {c.solution.map((s, n) => (
                        <li key={n} className="flex gap-3 leading-relaxed text-muted">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-xs text-accent">
                            {n + 1}
                          </span>
                          {s}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
              <footer className="flex gap-3 border-t border-line bg-card px-6 py-5 sm:px-8">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-ok" aria-hidden />
                <p className="leading-relaxed text-ink">
                  <span className="font-semibold">Result. </span>
                  {c.result}
                </p>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
