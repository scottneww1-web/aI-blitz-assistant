/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 2027 Cyber Matrix Theme - Black/Grey with Cyan/Green
        void: {
          950: '#000000', // Pure Black (deepest background)
          900: '#0a0a0a', // Near Black
          800: '#1a1a1a', // Dark Grey
          700: '#2a2a2a', // Medium Dark Grey
          600: '#3a3a3a', // Medium Grey
        },
        cyber: {
          cyan: {
            300: '#67e8f9', // Bright Cyan
            400: '#22d3ee', // Neon Cyan
            500: '#06b6d4', // Electric Cyan
            600: '#0891b2', // Deep Cyan
            700: '#0e7490', // Darker Cyan
          },
          green: {
            300: '#6ee7b7', // Bright Green
            400: '#34d399', // Neon Green
            500: '#10b981', // Electric Green
            600: '#059669', // Deep Green
            700: '#047857', // Darker Green
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'radial-gradient(ellipse at top, rgba(34, 211, 238, 0.15), transparent 60%), radial-gradient(ellipse at bottom, rgba(16, 185, 129, 0.1), transparent 60%)',
        'matrix-glow': 'linear-gradient(135deg, rgba(34, 211, 238, 0.3), rgba(16, 185, 129, 0.3), rgba(34, 211, 238, 0.2))',
      },
      animation: {
        'gradient-x': 'gradient-x 4s ease infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 30px rgba(34, 211, 238, 0.8)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 50px rgba(16, 185, 129, 0.9)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '33%': {
            transform: 'translateY(-25px) rotate(1deg)',
          },
          '66%': {
            transform: 'translateY(-10px) rotate(-1deg)',
          },
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-200% center',
          },
          '100%': {
            backgroundPosition: '200% center',
          },
        },
        'scan': {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(100%)',
          },
        },
      },
      boxShadow: {
        'cyber-cyan': '0 0 40px rgba(34, 211, 238, 0.6), 0 0 80px rgba(34, 211, 238, 0.3)',
        'cyber-green': '0 0 40px rgba(16, 185, 129, 0.6), 0 0 80px rgba(16, 185, 129, 0.3)',
        'matrix-glow': '0 8px 32px rgba(34, 211, 238, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.7)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
