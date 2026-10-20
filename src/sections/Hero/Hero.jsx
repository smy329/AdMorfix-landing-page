import Container from '../../components/ui/Container.jsx'
import Button from '../../components/ui/Button.jsx'
import AccentBar from '../../components/ui/AccentBar.jsx'
import HeroVideo from '../../components/media/HeroVideo.jsx'
import { HERO_CONTENT } from '../../content/hero.js'

export default function Hero() {
  const { title, description, primaryCta, secondaryCta, video } = HERO_CONTENT

  return (
    <section aria-labelledby="hero-title" className="backdrop-ember relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h1
            id="hero-title"
            className="font-display text-[2.5rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
          >
            {title}
          </h1>
          <AccentBar className="mt-6" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-muted sm:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <HeroVideo label={video.label} />
        </div>
      </Container>
    </section>
  )
}
