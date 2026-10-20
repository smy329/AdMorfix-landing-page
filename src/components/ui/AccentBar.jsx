// Short orange underline accent from the brand board.
export default function AccentBar({ className = '' }) {
  return <span aria-hidden="true" className={`block h-1 w-12 rounded-full bg-brand-gradient ${className}`} />
}
