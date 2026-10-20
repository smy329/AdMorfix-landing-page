import Container from '../../components/ui/Container.jsx'
import SectionHeading from '../../components/ui/SectionHeading.jsx'
import ComparisonTable from '../../components/ui/ComparisonTable.jsx'
import { COMPARE_CONTENT } from '../../content/compare.js'
import { SITE } from '../../config/site.js'

export default function Compare() {
  const { eyebrow, title, description, caption, columns, rows } = COMPARE_CONTENT

  return (
    <section id={SITE.anchors.compare} aria-labelledby="compare-title" className="pb-24 sm:pb-32">
      <Container>
        <SectionHeading id="compare-title" eyebrow={eyebrow} title={title}>
          {description}
        </SectionHeading>

        <div className="mx-auto mt-12 max-w-5xl sm:mt-14">
          <ComparisonTable caption={caption} columns={columns} rows={rows} />
        </div>
      </Container>
    </section>
  )
}
