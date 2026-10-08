import type { ReactNode } from 'react'
import { cn } from '../../lib/content'

type Variant = 'primary' | 'secondary' | 'inverse' | 'outline-inverse'

const styles: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-accent',
  secondary: 'border border-line-strong bg-card text-ink hover:border-ink',
  /* for dark backgrounds */
  inverse: 'bg-white text-ink hover:bg-accent-soft',
  'outline-inverse': 'border border-white/25 text-white hover:bg-white/10',
}

interface ButtonProps {
  children: ReactNode
  href: string
  variant?: Variant
  icon?: ReactNode
  download?: string
  external?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  className?: string
}

/** Link styled as a button. */
export function Button({ children, href, variant = 'primary', icon, download, external, onClick, className }: ButtonProps) {
  return (
    <a
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={cn(
        'group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        styles[variant],
        className,
      )}
    >
      {children}
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </a>
  )
}
