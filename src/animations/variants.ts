import type { Transition, Variants } from 'framer-motion'

/** Strong ease-out: fast start, gentle settle. Matches --ease-out in index.css. */
export const easeOutExpo: Transition['ease'] = [0.23, 1, 0.32, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } },
}

export const stagger = (step = 0.05, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: step, delayChildren: delay } },
})

export const viewportOnce = { once: true, margin: '0px 0px -12% 0px' } as const
