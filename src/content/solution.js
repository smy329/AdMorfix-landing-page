// Approved copy for the Solution ("Is this for you?") section.
import { Clock, TrendingUp, Users, Zap } from 'lucide-react'

export const SOLUTION_CONTENT = {
  eyebrow: 'Solution',
  title: 'Built for teams',
  titleContinued: 'shipping at volume.',
  description:
    'High-volume, high-quality video ads without the overhead of an in-house creative team.',
  audiences: [
    {
      id: 'dtc',
      icon: TrendingUp,
      title: 'DTC & E-commerce',
      description:
        'Need a constant flow of fresh ad creatives to test? We produce UGC video ads at scale so you can find winners faster and keep your campaigns fresh.',
    },
    {
      id: 'agencies',
      icon: Users,
      title: 'Marketing Agencies',
      description:
        'White-label our service for your clients. We produce the ads, you deliver the results. Scale your agency without scaling your team.',
    },
    {
      id: 'startups',
      icon: Zap,
      title: 'Startups & SaaS',
      description:
        'No video team? No problem. We turn your product into compelling video ads that explain your value prop and drive signups.',
    },
    {
      id: 'teams',
      icon: Clock,
      title: 'Busy Marketing Teams',
      description:
        'Your team is stretched thin. Offload video ad production to us and focus on what matters — strategy, analytics, and growth.',
    },
  ],
}
