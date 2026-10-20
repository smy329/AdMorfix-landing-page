// Approved copy for the How it works section.
import { BarChart3, MessageSquare, Palette, Target, Video, Zap } from 'lucide-react'

export const HOW_IT_WORKS_CONTENT = {
  eyebrow: 'How it works',
  title: 'From product to posted,',
  titleContinued: 'in six steps.',
  description: 'From creative strategy to final delivery — the full UGC video ad production pipeline.',
  steps: [
    {
      id: 'strategy',
      icon: Target,
      title: 'Creative Strategy',
      description:
        'We analyze your product, audience, and competitors to craft a winning ad strategy tailored to your goals.',
    },
    {
      id: 'scripts',
      icon: MessageSquare,
      title: 'Script Writing',
      description: 'Our team writes high-converting scripts with proven hooks, angles, and CTAs that drive action.',
    },
    {
      id: 'production',
      icon: Video,
      title: 'AI Video Production',
      description:
        'We produce polished UGC-style video ads using our AI creators — no actors, no studios, no delays.',
    },
    {
      id: 'variations',
      icon: Palette,
      title: 'Creative Variations',
      description:
        'Get multiple ad variations to A/B test — different hooks, creators, and angles for every campaign.',
    },
    {
      id: 'optimization',
      icon: BarChart3,
      title: 'Performance Optimization',
      description:
        'We iterate on what works. New creatives based on your ad performance data to keep ROAS climbing.',
    },
    {
      id: 'turnaround',
      icon: Zap,
      title: 'Fast Turnaround',
      description:
        'Receive your first batch of ads within days, not weeks. Scale up or down as your campaigns demand.',
    },
  ],
}
