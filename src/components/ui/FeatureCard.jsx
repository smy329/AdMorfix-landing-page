export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="h-full rounded-2xl border border-ink-line bg-ink-raised p-6 sm:p-8">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-line bg-ink text-brand-orange">
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mist-muted sm:text-base">{description}</p>
    </article>
  )
}
