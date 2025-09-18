/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ef7358',
          dark: '#b22c6c',
          light: '#ffefa6',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        textShimmer: 'textShimmer 3s linear infinite',
        scroll: 'scroll 2s ease-in-out infinite',
        'shooting-star': 'shootingStar var(--star-duration) ease-in-out infinite',
        'shooting-star-trail': 'shootingStarTrail var(--star-duration) ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        scroll: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(20px)', opacity: '0' },
        },
        shootingStar: {
          '0%': { 
            transform: 'translate(0, 0) rotate(var(--star-rotation))',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': { 
            transform: 'translate(calc(100vw * 1.5), calc(100vh * -1.5)) rotate(var(--star-rotation))',
            opacity: '0',
          },
        },
        shootingStarTrail: {
          '0%': { 
            width: '0',
            opacity: '0.8',
          },
          '5%': {
            width: '100px',
            opacity: '0.8',
          },
          '90%': {
            opacity: '0.8',
          },
          '100%': { 
            width: '0',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
