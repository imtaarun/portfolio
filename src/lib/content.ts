/** True for strings like "[ADD COMPANY NAME]" that still need real content. */
export const isPlaceholder = (value: string | undefined): boolean =>
  !!value && value.trim().startsWith('[ADD')

/** A link is usable only when it is set and is not a placeholder. */
export const isLiveLink = (value: string | undefined): value is string =>
  !!value && !isPlaceholder(value)

/** Resolve a file in /public against the app's base URL. */
export const publicPath = (file: string): string => `${import.meta.env.BASE_URL}${file.replace(/^\//, '')}`

export const cn = (...classes: Array<string | false | null | undefined>): string =>
  classes.filter(Boolean).join(' ')

/** Ask the detail section to expand an entry, then scroll to it. */
export const OPEN_DETAIL_EVENT = 'portfolio:open-detail'
export const openDetail = (id: string): void => {
  window.dispatchEvent(new CustomEvent<string>(OPEN_DETAIL_EVENT, { detail: id }))
  // let the entry expand before scrolling to it
  window.setTimeout(() => scrollToId(id), 60)
}

export const scrollToId = (id: string): void => {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}
