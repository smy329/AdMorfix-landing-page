/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6A00',
          'orange-hot': '#FF8A2B',
          ember: '#FF3D00',
          amber: '#FFB000',
        },
        ink: {
          DEFAULT: '#0B0D0F', // Charcoal Black
          raised: '#12161A',
          line: 'rgba(229, 231, 235, 0.12)',
        },
        mist: {
          DEFAULT: '#E5E7EB', // Cool Gray
          muted: '#A4ABB5',
        },
      },
      fontFamily: {
        display: ['"Montserrat Variable"', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FFB000 0%, #FF6A00 55%, #FF3D00 100%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,106,0,0.18), 0 30px 90px -20px rgba(255,106,0,0.45)',
        'glow-sm': '0 0 24px -4px rgba(255,106,0,0.55)',
      },
      maxWidth: {
        container: '80rem',
      },
    },
  },
  plugins: [],
}
