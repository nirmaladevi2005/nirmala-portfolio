/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aurora: {
          bg: '#050510',
          card: '#0D0D1A',
          'card-hover': '#131326',
          violet: '#8B5CF6',
          cyan: '#38BDF8',
          highlight: '#C4B5FD',
          text: '#F8FAFC',
          muted: '#94A3B8',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-glow': 'rgba(139, 92, 246, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'aurora-pulse': 'auroraPulse 10s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        auroraPulse: {
          '0%': { opacity: '0.4', transform: 'scale(1) translate(0px, 0px)' },
          '50%': { opacity: '0.75', transform: 'scale(1.1) translate(-20px, 15px)' },
          '100%': { opacity: '0.5', transform: 'scale(0.95) translate(25px, -10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%': { opacity: '0.3', filter: 'blur(30px)' },
          '100%': { opacity: '0.7', filter: 'blur(50px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
      },
      boxShadow: {
        'aurora-glow': '0 0 40px -10px rgba(139, 92, 246, 0.25)',
        'cyan-glow': '0 0 40px -10px rgba(56, 189, 248, 0.25)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
