// Approved copy for the Get Started section.
import { SITE } from '../config/site.js'
import { TelegramIcon, WhatsAppIcon } from '../components/icons/BrandIcons.jsx'

export const GET_STARTED_CONTENT = {
  eyebrow: 'Get Started',
  title: 'Book your',
  titleContinued: 'discovery call.',
  description:
    'Tell us about your brand and goals. We’ll show you exactly how we can scale your video ad production.',
  channels: [
    { id: 'whatsapp', label: 'WhatsApp', href: SITE.links.whatsapp, icon: WhatsAppIcon },
    { id: 'telegram', label: 'Telegram', href: SITE.links.telegram, icon: TelegramIcon },
  ],
}
