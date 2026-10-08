import { skills } from '../../data/highlights'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="What I work with" title="Skills" className="bg-card">
      <div className="divide-y divide-line border-y border-line">
        {skills.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.04}>
            <div className="grid gap-3 py-5 md:grid-cols-[12rem_1fr] md:gap-8">
              <h3 className="font-medium text-ink">{g.name}</h3>
              <div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full border border-line bg-page px-3 py-1 text-sm text-ink/85">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
