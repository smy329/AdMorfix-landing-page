// Approved copy and media for "The Work" section.
// Video label format: serial - Product Category - Ad Type (from the file names).
import kitchenwareVideo from '../assets/media/work/1-kitchenware.mp4'
import kitchenwarePoster from '../assets/media/work/1-kitchenware.webp'
import perfumeVideo from '../assets/media/work/2-perfume.mp4'
import perfumePoster from '../assets/media/work/2-perfume.webp'
import beautyVideo from '../assets/media/work/3-beauty.mp4'
import beautyPoster from '../assets/media/work/3-beauty.webp'
import erpVideo from '../assets/media/work/4-erp.mp4'
import erpPoster from '../assets/media/work/4-erp.webp'
import fashionVideo from '../assets/media/work/5-fashion.mp4'
import fashionPoster from '../assets/media/work/5-fashion.webp'

export const WORK_CONTENT = {
  eyebrow: 'The Work',
  title: 'An ad that doesn’t look like an ad is the best ad there is.',
  description:
    'Real settings, real talking, captions that keep the thumb still. Every ad is built to blend into the feed on TikTok, Reels and Shorts, then cut in variations so we can test what actually sells. See AI UGC ad examples broken down by hook and format, or read how we make AI UGC ads.',
  videos: [
    { id: 'kitchenware', category: 'Kitchenware', type: 'Story Ads', src: kitchenwareVideo, poster: kitchenwarePoster },
    { id: 'perfume', category: 'Perfume', type: 'Product Explain', src: perfumeVideo, poster: perfumePoster },
    { id: 'beauty', category: 'Beauty', type: 'Product Review', src: beautyVideo, poster: beautyPoster },
    { id: 'erp', category: 'ERP', type: 'AI UGC', src: erpVideo, poster: erpPoster },
    { id: 'fashion', category: 'Fashion', type: 'Product Explainer', src: fashionVideo, poster: fashionPoster },
  ],
}
