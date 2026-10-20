// Single source of truth for destinations. Update here, nowhere else.
const anchors = {
  work: 'the-work', // "The Work"
  solution: 'solution', // "Solution"
  howItWorks: 'how-it-works', // "How it works"
  whyUs: 'why-admorfix', // "Why ADMorfix"
  compare: 'how-we-compare', // "How we compare"
  getStarted: 'get-started', // "Get Started"
}

// DEMO VALUES. Replace with the real contact details.
//  - whatsapp: digits only, with country code (no +, spaces or dashes)
//  - telegram: a username ("yourname") or a phone number ("+15551234567")
const contact = {
  whatsapp: '12125550100',
  telegram: '+12125550100',
}

export const SITE = {
  name: 'ADMorfix',
  tagline: 'Make Every Frame Matter.',
  anchors,
  contact,
  links: {
    contact: `#${anchors.getStarted}`,
    samples: `#${anchors.work}`,
    whatsapp: `https://wa.me/${contact.whatsapp}`,
    telegram: `https://t.me/${contact.telegram}`,
    home: '#top',
  },
}
