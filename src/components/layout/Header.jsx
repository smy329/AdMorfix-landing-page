import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container.jsx'
import Logo from '../ui/Logo.jsx'
import Button from '../ui/Button.jsx'
import useScrolled from '../../hooks/useScrolled.js'
import { NAV_CTA, NAV_LINKS } from '../../content/navigation.js'
import { SITE } from '../../config/site.js'

const LINK =
  'rounded-md py-2 text-sm font-medium text-mist/80 transition-colors hover:text-white motion-reduce:transition-none'

export default function Header() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  const solid = scrolled || menuOpen

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-200 motion-reduce:transition-none ${
        solid ? 'border-ink-line bg-ink/85 backdrop-blur-lg' : 'border-transparent bg-transparent'
      }`}
    >
      <a
        href="#top"
        className="sr-only rounded-md bg-brand-orange px-4 py-2 font-semibold text-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-3"
      >
        Skip to content
      </a>

      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a href={SITE.links.home} aria-label={`${SITE.name} home`} className="rounded-md" onClick={closeMenu}>
          <Logo className="h-9 w-auto sm:h-10" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className={LINK}>
              {label}
            </a>
          ))}
          <Button href={NAV_CTA.href} size="sm">
            {NAV_CTA.label}
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden motion-reduce:transition-none"
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </Container>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-ink-line lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} onClick={closeMenu} className={`${LINK} py-3 text-base`}>
                {label}
              </a>
            ))}
            <Button href={NAV_CTA.href} onClick={closeMenu} className="mt-3">
              {NAV_CTA.label}
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}
