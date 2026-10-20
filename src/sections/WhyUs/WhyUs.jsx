import Container from '../../components/ui/Container.jsx'
import SectionHeading from '../../components/ui/SectionHeading.jsx'
import ValueCard from '../../components/ui/ValueCard.jsx'
import { WHY_US_CONTENT } from '../../content/whyUs.js'
import { SITE } from '../../config/site.js'

export default function WhyUs() {
  const { eyebrow, title, titleContinued, description, reasons } = WHY_US_CONTENT

  return (
    <section id={SITE.anchors.whyUs} aria-labelledby="why-us-title" className="pb-24 sm:pb-32">
      <Container>
        <SectionHeading id="why-us-title" eyebrow={eyebrow} title={title} titleContinued={titleContinued}>
          {description}
        </SectionHeading>

        <ul className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-3">
          {reasons.map(({ id, ...reason }) => (
            <li key={id}>
              <ValueCard {...reason} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
