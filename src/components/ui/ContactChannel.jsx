export default function ContactChannel({ label, href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contact us on ${label} (opens in a new tab)`}
      className="group flex flex-col items-center gap-3 rounded-2xl p-2"
    >
      <span className="flex h-20 w-20 items-center justify-center rounded-full border border-ink-line bg-ink-raised text-brand-orange transition-[background-color,color,box-shadow,transform] duration-200 group-hover:bg-brand-orange group-hover:text-ink group-hover:shadow-glow-sm group-active:scale-95 motion-reduce:transition-none motion-reduce:group-active:scale-100">
        <Icon size={32} />
      </span>
      <span className="font-display text-sm font-bold tracking-wide text-white">{label}</span>
    </a>
  )
}
