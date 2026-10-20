import Container from '../ui/Container.jsx'
import { FOOTER_CONTENT } from '../../content/footer.js'

const SEPARATOR = (
  <span aria-hidden="true" className="px-2 text-mist/30">
    ·
  </span>
)

export default function Footer() {
  const { copyright, phone, rights, note } = FOOTER_CONTENT

  return (
    <footer className="border-t border-ink-line">
      <Container className="flex flex-col gap-3 py-8 text-[0.7rem] font-medium uppercase leading-relaxed tracking-[0.16em] text-mist-muted sm:text-xs xl:flex-row xl:items-center xl:justify-between">
        <p>
          {copyright}
          {SEPARATOR}
          <a href={phone.href} className="rounded transition-colors hover:text-white motion-reduce:transition-none">
            {phone.label}
          </a>
          {SEPARATOR}
          {rights}
        </p>
        <p>{note}</p>
      </Container>
    </footer>
  )
}
