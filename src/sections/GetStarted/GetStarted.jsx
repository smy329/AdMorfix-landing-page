import Container from '../../components/ui/Container.jsx'
import SectionHeading from '../../components/ui/SectionHeading.jsx'
import ContactChannel from '../../components/ui/ContactChannel.jsx'
import { GET_STARTED_CONTENT } from '../../content/getStarted.js'
import { SITE } from '../../config/site.js'

export default function GetStarted() {
  const { eyebrow, title, titleContinued, description, channels } = GET_STARTED_CONTENT

  return (
    <section id={SITE.anchors.getStarted} aria-labelledby="get-started-title" className="pb-24 sm:pb-32">
      <Container>
        <SectionHeading id="get-started-title" eyebrow={eyebrow} title={title} titleContinued={titleContinued}>
          {description}
        </SectionHeading>

        <ul className="mt-12 flex items-start justify-center gap-8 sm:mt-14 sm:gap-12">
          {channels.map(({ id, ...channel }) => (
            <li key={id}>
              <ContactChannel {...channel} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
