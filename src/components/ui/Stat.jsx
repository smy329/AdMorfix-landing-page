export default function Stat({ figure, unit, description }) {
  return (
    <div className="flex h-full flex-col gap-3 p-6 sm:p-8">
      <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-white lg:text-[2.1rem] xl:text-5xl">
        <span className="text-brand-orange">{figure}</span>
        {unit && ` ${unit}`}
      </p>
      <p className="text-sm leading-relaxed text-mist-muted">{description}</p>
    </div>
  )
}
