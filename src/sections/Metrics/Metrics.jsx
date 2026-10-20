import Container from '../../components/ui/Container.jsx'
import Stat from '../../components/ui/Stat.jsx'
import { METRICS } from '../../content/metrics.js'

export default function Metrics() {
  return (
    <section aria-label="Key metrics" className="pb-20 sm:pb-24">
      <Container>
        {/* gap-px over a tinted background draws the dividers at every breakpoint */}
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map(({ id, ...stat }) => (
            <li key={id} className="bg-ink-raised">
              <Stat {...stat} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
