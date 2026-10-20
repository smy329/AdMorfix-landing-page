import { useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { pauseOtherVideos } from '../../utils/media.js'

// Vertical video in a phone frame. Nothing downloads until the visitor presses play.
export default function PhoneVideoCard({ video }) {
  const { category, type, src, poster } = video
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const el = videoRef.current
    if (!el) return
    if (playing) {
      el.pause()
    } else {
      pauseOtherVideos(el)
      el.play().catch(() => {})
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`${playing ? 'Pause' : 'Play'} ${type} ad for ${category}`}
      className="group block w-full rounded-[1.75rem] border border-ink-line bg-ink-raised p-1.5 text-left shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)] transition-[border-color,box-shadow] duration-200 hover:border-brand-orange/50 hover:shadow-glow-sm motion-reduce:transition-none"
    >
      <span className="relative block aspect-[9/16] overflow-hidden rounded-[1.4rem] bg-ink">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          width="540"
          height="960"
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        <span aria-hidden="true" className="absolute left-1/2 top-2 z-10 h-4 w-14 -translate-x-1/2 rounded-full bg-black" />

        <span
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 motion-reduce:transition-none ${
            playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          }`}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/60 text-white backdrop-blur-md transition-colors group-hover:bg-brand-orange group-hover:text-ink">
            {playing ? <Pause size={20} /> : <Play size={20} className="translate-x-px" />}
          </span>
        </span>

        <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-3 pb-3 pt-10">
          <span className="block font-display text-[0.7rem] font-extrabold uppercase leading-tight tracking-wider text-white xl:text-xs">
            {type}
          </span>
          <span className="mt-0.5 block text-[0.6rem] font-medium uppercase tracking-[0.18em] text-mist/70 xl:text-[0.65rem]">
            {category}
          </span>
        </span>
      </span>
    </button>
  )
}
