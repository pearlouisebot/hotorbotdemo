/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#FF4444',
        bg: '#0a0a0a',
      },
    },
  },
  plugins: [],
}
