import { useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import videoSrc from '../../assets/media/hero.mp4'
import posterSrc from '../../assets/media/hero-poster.webp'

const CONTROL =
  'inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink/70 text-white backdrop-blur-md transition-colors hover:bg-ink/90 motion-reduce:transition-none'

// Gestures browsers accept as permission to start audio (scrolling is not one).
const UNLOCK_EVENTS = ['pointerdown', 'keydown', 'touchend']

export default function HeroVideo({ label }) {
  const videoRef = useRef(null)
  const stopUnlockRef = useRef(() => {})
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  // Autoplay on every load/reload: try with sound first. If the browser blocks
  // sound, play muted and turn sound on at the first click, tap or key press.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    let cancelled = false

    const stopUnlock = () => {
      UNLOCK_EVENTS.forEach((type) => window.removeEventListener(type, unlock, true))
    }
    stopUnlockRef.current = stopUnlock

    function unlock(event) {
      if (event.target.closest?.('[data-video-controls]')) return
      video.muted = false
      setMuted(false)
      stopUnlock()
    }

    const playMuted = () => {
      video.muted = true
      setMuted(true)
      video.play().catch(() => {})
      UNLOCK_EVENTS.forEach((type) => window.addEventListener(type, unlock, true))
    }

    video.muted = false
    video
      .play()
      .then(() => {
        if (!cancelled) setMuted(false)
      })
      .catch(() => {
        if (!cancelled) playMuted()
      })

    return () => {
      cancelled = true
      stopUnlock()
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) video.play().catch(() => {})
    else video.pause()
  }

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return
    stopUnlockRef.current()
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-ink-line bg-ink-raised shadow-glow">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        aria-label={label}
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <div
        data-video-controls
        className="absolute inset-x-3 bottom-3 flex items-center justify-between sm:inset-x-4 sm:bottom-4"
      >
        <button
          type="button"
          onClick={togglePlay}
          className={CONTROL}
          aria-label={playing ? 'Pause video' : 'Play video'}
        >
          {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
        </button>
        <button
          type="button"
          onClick={toggleSound}
          className={CONTROL}
          aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
        >
          {muted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
        </button>
      </div>
    </div>
  )
}
