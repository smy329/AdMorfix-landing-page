import logoDark from '../../assets/brand/logo-dark.png'
import logoLight from '../../assets/brand/logo-light.png'
import { SITE } from '../../config/site.js'

// `surface` is the background the logo sits on.
const SOURCES = { dark: logoDark, light: logoLight }

export default function Logo({ surface = 'dark', className = 'h-10 w-auto' }) {
  return (
    <img
      src={SOURCES[surface]}
      alt={`${SITE.name}: ${SITE.tagline}`}
      width="640"
      height="145"
      decoding="async"
      className={className}
    />
  )
}
