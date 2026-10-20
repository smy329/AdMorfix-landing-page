import Container from '../../components/ui/Container.jsx'
import SectionHeading from '../../components/ui/SectionHeading.jsx'
import FeatureCard from '../../components/ui/FeatureCard.jsx'
import { HOW_IT_WORKS_CONTENT } from '../../content/howItWorks.js'
import { SITE } from '../../config/site.js'

export default function HowItWorks() {
  const { eyebrow, title, titleContinued, description, steps } = HOW_IT_WORKS_CONTENT

  return (
    <section id={SITE.anchors.howItWorks} aria-labelledby="how-it-works-title" className="pb-24 sm:pb-32">
      <Container>
        <SectionHeading id="how-it-works-title" eyebrow={eyebrow} title={title} titleContinued={titleContinued}>
          {description}
        </SectionHeading>

        <ol className="mx-auto mt-12 grid max-w-6xl gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ id, ...step }) => (
            <li key={id}>
              <FeatureCard {...step} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
