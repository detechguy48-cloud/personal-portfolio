
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        body: ['Instrument Sans', 'sans-serif'],
      },
      colors: {
        neo: {
          bg: '#050810',
          surface: '#0d1117',
          glass: 'rgba(255,255,255,0.04)',
          border: 'rgba(255,255,255,0.08)',
          accent: '#00d4ff',
          accent2: '#7c3aed',
          accent3: '#10b981',
          muted: '#4b5563',
          text: '#e2e8f0',
          sub: '#94a3b8',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(0,212,255,0.2)' },
          to: { boxShadow: '0 0 40px rgba(0,212,255,0.5), 0 0 80px rgba(0,212,255,0.2)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        }
      }
    }
  },
  plugins: [],
}
