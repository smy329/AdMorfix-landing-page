import Container from '../../components/ui/Container.jsx'
import SectionHeading from '../../components/ui/SectionHeading.jsx'
import PhoneVideoCard from '../../components/media/PhoneVideoCard.jsx'
import { WORK_CONTENT } from '../../content/work.js'
import { SITE } from '../../config/site.js'

export default function Work() {
  const { eyebrow, title, description, videos } = WORK_CONTENT

  return (
    <section id={SITE.anchors.work} aria-labelledby="work-title" className="pb-24 sm:pb-32">
      <Container>
        <SectionHeading id="work-title" eyebrow={eyebrow} title={title}>
          {description}
        </SectionHeading>
      </Container>

      {/* One row at every size: a grid on large screens, a snap-scrolling strip below. */}
      <Container className="mt-12 sm:mt-14">
        <ul className="-mx-5 flex scroll-pl-5 snap-x snap-mandatory sm:scroll-pl-8 gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0">
          {videos.map((video) => (
            <li key={video.id} className="w-[13.5rem] shrink-0 snap-start sm:w-56 lg:w-auto">
              <PhoneVideoCard video={video} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
