/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        primary: {
          DEFAULT: '#00f2fe',
          glow: '#4facfe',
        },
        secondary: {
          DEFAULT: '#00fe9b',
          glow: '#00ffcc',
        },
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'tech-gradient': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
