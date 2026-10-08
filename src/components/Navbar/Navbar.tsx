import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { easeOutExpo } from '../../animations/variants'
import { navItems } from '../../data/navigation'
import { profile, resume } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn, publicPath, scrollToId } from '../../lib/content'

const sectionIds = navItems.map((n) => n.id)

export function Navbar() {
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || open ? 'border-line bg-page/90 backdrop-blur-md' : 'border-transparent bg-transparent',
      )}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" onClick={(e) => go(e, 'top')} className="text-[15px] font-semibold tracking-tight text-ink">
          {profile.fullName}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => go(e, item.id)}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'rounded-full px-3 py-1.5 text-sm transition-colors',
                  active === item.id ? 'bg-accent-soft text-accent' : 'text-muted hover:text-ink',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={publicPath(resume.file)}
            download={resume.downloadName}
            className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent sm:inline-flex"
          >
            <Download size={14} aria-hidden /> Resume
          </a>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-ink lg:hidden"
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      {/* reading progress */}
      <motion.div aria-hidden style={{ scaleX: progress }} className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-accent" />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, ease: easeOutExpo }}
            className="border-t border-line bg-page lg:hidden"
          >
            <ul className="mx-auto flex max-w-5xl flex-col px-5 py-3 sm:px-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => go(e, item.id)}
                    className={cn(
                      'block rounded-lg px-3 py-3 text-base',
                      active === item.id ? 'bg-accent-soft font-medium text-accent' : 'text-ink',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="px-3 pb-2 pt-3">
                <a
                  href={publicPath(resume.file)}
                  download={resume.downloadName}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white"
                >
                  <Download size={14} aria-hidden /> Download resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
