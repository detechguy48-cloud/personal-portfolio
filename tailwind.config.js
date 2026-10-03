/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        // Core palette — always light
        ink: '#0B0B14',
        mut: '#5B6075',
        line: '#E8E9F0',
        soft: '#F6F7FB',
        // Accent ramp
        accent: '#4F46E5',
        aqua: '#06B6D4',
        rose: '#F472B6',
      },
      borderRadius: {
        '4xl': '32px',
      },
      animation: {
        'float': 'float 14s ease-in-out infinite',
        'bob': 'bob 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'ping-soft': 'pingSoft 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -40px) scale(1.12)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        pingSoft: {
          '75%, 100%': { boxShadow: '0 0 0 10px rgba(34,197,94,0)' },
        },
      },
    }
  },
  plugins: [],
}
