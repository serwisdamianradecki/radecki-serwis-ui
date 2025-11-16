/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-main': '#E8E4DF',
        'background-alt': '#D8D3CD',
        primary: {
          DEFAULT: '#8F857E',
          600: '#796F68',
          700: '#675F5A',
        },
        accent: {
          DEFAULT: '#A89F97',
          dark: '#4A4643',
        },
        'text-main': '#1D1D1D',
        'text-muted': '#524F4D',
        'border-soft': '#C9C4BF',
        'button-text': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-up-slow': 'fadeInUp 0.8s ease-out',
        'pulse-subtle': 'pulseSubtle 12s ease-in-out infinite',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulseSubtle: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.95',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
