import Container from '../../components/ui/Container.jsx'
import SectionHeading from '../../components/ui/SectionHeading.jsx'
import FeatureCard from '../../components/ui/FeatureCard.jsx'
import { SOLUTION_CONTENT } from '../../content/solution.js'
import { SITE } from '../../config/site.js'

export default function Solution() {
  const { eyebrow, title, titleContinued, description, audiences } = SOLUTION_CONTENT

  return (
    <section id={SITE.anchors.solution} aria-labelledby="solution-title" className="pb-24 sm:pb-32">
      <Container>
        <SectionHeading id="solution-title" eyebrow={eyebrow} title={title} titleContinued={titleContinued}>
          {description}
        </SectionHeading>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
          {audiences.map(({ id, ...audience }) => (
            <li key={id}>
              <FeatureCard {...audience} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
