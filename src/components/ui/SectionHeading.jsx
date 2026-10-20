import AccentBar from './AccentBar.jsx'

// Eyebrow + title + accent bar + optional description, shared by every section.
// `titleContinued` renders the title's second line (same color, forced line break). `align` is 'center' (default) or 'left'.
export default function SectionHeading({ id, eyebrow, title, titleContinued, align = 'center', children }) {
  const centered = align === 'center'

  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p
          className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange ${
            centered ? 'justify-center' : ''
          }`}
        >
          <span aria-hidden="true" className="h-px w-6 bg-brand-orange" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
        {titleContinued && (
          <>
            {' '}
            <span className="block">{titleContinued}</span>
          </>
        )}
      </h2>
      <AccentBar className={`mt-6 ${centered ? 'mx-auto' : ''}`} />
      {children && (
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed text-mist-muted sm:text-lg ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {children}
        </p>
      )}
    </div>
  )
}
