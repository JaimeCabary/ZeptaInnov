/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f3ff',
          purple: '#b967ff',
          pink: '#ff2df7',
          green: '#00ff88',
          cyan: '#00f3ff',
          orange: '#e65c00', // darker, metallic orange
          amber:  '#cc8400', // richer amber, not too bright
        },
        metallic: {
          silver: '#e8e8e8',
          gold: '#ffd700',
          bronze: '#cd7f32',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite', // Added for Hero grid
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #ff5500, 0 0 10px #ff5500, 0 0 15px #ff5500' }, // Changed to orange
          '100%': { boxShadow: '0 0 10px #ff5500, 0 0 20px #ff5500, 0 0 30px #ff5500' }, // Changed to orange
        },
        'pulse-glow': {
          '0%': { opacity: '0.8', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.02)' },
        },
        'grid-move': { // Added for Hero grid animation
          '0%': { transform: 'translateY(0) translateX(0)' },
          '100%': { transform: 'translateY(-50px) translateX(-50px)' },
        }
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        'neon-gradient': 'linear-gradient(45deg, #00f3ff, #b967ff, #ff2df7)', // Added for Hero
      },
      // ✅ ADD THESE PERFORMANCE OPTIMIZATIONS:
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
      transitionDuration: {
        '400': '400ms',
      },
      willChange: {
        'transform-opacity': 'transform, opacity',
      }
    },
  },
  plugins: [],
}