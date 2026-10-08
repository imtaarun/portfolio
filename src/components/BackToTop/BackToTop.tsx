import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { easeOutExpo } from '../../animations/variants'
import { scrollToId } from '../../lib/content'

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.2)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={() => scrollToId('top')}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: easeOutExpo }}
          className="press origin-bottom fixed right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-ink shadow-sm transition-colors hover:border-ink sm:right-8"
          style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
        >
          <ArrowUp size={17} aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
