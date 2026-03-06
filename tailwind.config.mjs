/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Syne"', 'sans-serif'],
      },
      colors: {
        base:    '#0a0a0a',
        surface: '#111114',
        panel:   '#16161a',
        border:  '#ffffff0f',
        cyan:    '#00d4ff',
        'cyan-dim': '#00d4ff33',
        emerald: '#00ff88',
        'emerald-dim': '#00ff8833',
        muted:   '#ffffff40',
        subtle:  '#ffffff18',
      },
      animation: {
        'fade-up':     'fadeUp .7s cubic-bezier(.16,1,.3,1) both',
        'fade-in':     'fadeIn .6s ease both',
        'glow-pulse':  'glowPulse 3s ease-in-out infinite',
        'border-spin': 'borderSpin 4s linear infinite',
        'float':       'float 6s ease-in-out infinite',
        'scan':        'scan 3s linear infinite',
      },
      keyframes: {
        fadeUp:  { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 20px #00d4ff22, 0 0 60px #00d4ff11' },
          '50%':     { boxShadow: '0 0 40px #00d4ff44, 0 0 100px #00d4ff22' },
        },
        borderSpin: { to: { '--angle': '360deg' } },
        float:  { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        scan:   { from: { top: '0%' }, to: { top: '100%' } },
      },
      backdropBlur: { xs: '4px' },
      boxShadow: {
        'glass':      '0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.4)',
        'cyan-glow':  '0 0 30px rgba(0,212,255,0.25)',
        'green-glow': '0 0 30px rgba(0,255,136,0.2)',
      },
    },
  },
  plugins: [],
};
