// Navbar items, in page order. Labels match the section eyebrows.
import { SITE } from '../config/site.js'

export const NAV_LINKS = [
  { label: 'The Work', href: `#${SITE.anchors.work}` },
  { label: 'Solution', href: `#${SITE.anchors.solution}` },
  { label: 'How It Works', href: `#${SITE.anchors.howItWorks}` },
  { label: 'Why ADMorfix', href: `#${SITE.anchors.whyUs}` },
  { label: 'How We Compare', href: `#${SITE.anchors.compare}` },
]

export const NAV_CTA = { label: 'Get Started', href: `#${SITE.anchors.getStarted}` }
