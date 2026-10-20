const BASE =
  'inline-flex items-center justify-center rounded-full font-display font-bold tracking-wide transition-[background-color,box-shadow,border-color,transform] duration-200 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100'

const SIZES = {
  md: 'min-h-12 px-7 text-sm',
  sm: 'min-h-10 px-5 text-xs',
}

const VARIANTS = {
  // Charcoal text on orange keeps contrast above WCAG AA; white on #FF6A00 does not.
  primary:
    'bg-brand-orange text-ink hover:bg-brand-orange-hot hover:shadow-glow-sm',
  secondary:
    'border border-mist/25 text-mist hover:border-brand-orange hover:text-white',
}

export default function Button({ href, variant = 'primary', size = 'md', className = '', children, ...props }) {
  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
