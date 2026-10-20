// Only one video should make sound at a time across the whole page.
export function pauseOtherVideos(current) {
  document.querySelectorAll('video').forEach((video) => {
    if (video !== current && !video.paused) video.pause()
  })
}
