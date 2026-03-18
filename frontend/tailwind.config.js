/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 2027 Neural Void Theme - Deep Space Dark Mode
        void: {
          950: '#030014', // Void Black (deepest background)
          900: '#0a0a1f', // Deep Space
          800: '#1a1a2e', // Dark Matter
          700: '#16213e', // Nebula Dark
        },
        neon: {
          violet: {
            400: '#a78bfa', // Electric Violet Light
            500: '#8b5cf6', // Electric Violet
            600: '#7c3aed', // Electric Violet Dark
            700: '#6d28d9', // Deep Violet
          },
          pink: {
            400: '#f472b6', // Laser Pink Light
            500: '#ec4899', // Laser Pink
            600: '#db2777', // Laser Pink Dark
          },
          cyan: {
            400: '#22d3ee', // Neon Cyan Light
            500: '#06b6d4', // Neon Cyan
            600: '#0891b2', // Neon Cyan Dark
          },
          green: {
            400: '#4ade80', // Matrix Green Light
            500: '#22c55e', // Matrix Green
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neural-void': 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.15), transparent 60%), radial-gradient(ellipse at bottom, rgba(236, 72, 153, 0.1), transparent 60%)',
        'holographic': 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3), rgba(34, 211, 238, 0.3))',
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
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.7)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 50px rgba(236, 72, 153, 0.9)',
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
        'neon-violet': '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(139, 92, 246, 0.3)',
        'neon-pink': '0 0 40px rgba(236, 72, 153, 0.6), 0 0 80px rgba(236, 72, 153, 0.3)',
        'neon-cyan': '0 0 40px rgba(34, 211, 238, 0.6), 0 0 80px rgba(34, 211, 238, 0.3)',
        'holographic': '0 8px 32px rgba(139, 92, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-void': '0 8px 32px 0 rgba(3, 0, 20, 0.7)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
