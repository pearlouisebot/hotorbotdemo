export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        appbg: '#090b10',
        panel: '#10141c',
        border: '#1b2430',
        accent: '#8fc7ff',
        muted: '#8692a5',
      },
      boxShadow: {
        ios: '0 12px 32px rgba(0,0,0,0.32)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 150ms ease-out',
      },
    },
  },
  plugins: [],
}
