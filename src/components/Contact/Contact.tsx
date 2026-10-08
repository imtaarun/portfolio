import { Check, Copy, Download, Mail } from 'lucide-react'
import { useState } from 'react'
import { profile, resume } from '../../data/profile'
import { isLiveLink, publicPath } from '../../lib/content'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

/** Closing section: email, profiles and the resume. */
export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      const el = document.getElementById('contact-email-address')
      if (!el) return
      const range = document.createRange()
      range.selectNodeContents(el)
      const sel = window.getSelection()
      sel?.removeAllRanges()
      sel?.addRange(range)
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 px-5 py-20 sm:px-8 md:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="rounded-[var(--radius-card)] bg-ink p-8 text-white sm:p-12 md:p-16">
          <p className="eyebrow text-white/60">Contact</p>
          <h2 id="contact-heading" className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Let's talk about your team.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            I'm open to senior full-stack roles. Email is the fastest way to reach me.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-3 pl-5">
            <Mail size={18} className="text-white/60" aria-hidden />
            <span id="contact-email-address" className="select-all text-lg font-medium">
              {profile.email}
            </span>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
              className="ml-auto inline-flex min-h-10 items-center gap-1.5 rounded-full bg-white px-4 text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
            >
              {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`} variant="inverse" icon={<Mail size={15} aria-hidden />}>
              Email me
            </Button>
            <Button href={profile.links.linkedin} external variant="outline-inverse" icon={<LinkedinIcon size={14} />}>
              LinkedIn
            </Button>
            {isLiveLink(profile.links.github) && (
              <Button href={profile.links.github} external variant="outline-inverse" icon={<GithubIcon size={14} />}>
                GitHub
              </Button>
            )}
            <Button
              href={publicPath(resume.file)}
              download={resume.downloadName}
              variant="outline-inverse"
              icon={<Download size={15} aria-hidden />}
            >
              Resume (PDF)
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
