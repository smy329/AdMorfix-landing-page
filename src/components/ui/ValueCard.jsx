import { Fragment } from 'react'

export default function ValueCard({ number, titleLines, description, tag }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-ink-line bg-ink-raised p-6 sm:p-8">
      <span className="text-xs font-semibold tracking-[0.2em] text-brand-orange">{number}</span>
      <h3 className="mt-10 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white">
        {titleLines.map((line, i) => (
          <Fragment key={line}>
            {i > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </h3>
      <p className="mt-5 text-sm leading-relaxed text-mist-muted sm:text-base">{description}</p>
      <p className="mt-auto flex items-center gap-3 pt-10 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-orange">
        <span aria-hidden="true" className="h-px w-4 bg-brand-orange" />
        {tag}
      </p>
    </article>
  )
}
