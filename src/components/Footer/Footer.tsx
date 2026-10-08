import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {profile.copyrightYear} {profile.fullName}
        </p>
        <p className="text-faint">{profile.footerTagline}</p>
      </div>
    </footer>
  )
}
