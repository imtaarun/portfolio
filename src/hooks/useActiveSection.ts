import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in the middle of the viewport.
 * Re-observes when sections mount later (lazy-loaded chunks).
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    const observed = new Set<Element>()
    const observeAll = () => {
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && !observed.has(el)) {
          observer.observe(el)
          observed.add(el)
        }
      })
    }
    observeAll()
    const mutation = new MutationObserver(observeAll)
    mutation.observe(document.body, { childList: true, subtree: true })
    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [ids])

  return active
}
