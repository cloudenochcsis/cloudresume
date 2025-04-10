module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bae0ff',
          300: '#82c6ff',
          400: '#42a8ff',
          500: '#1a8aff',
          600: '#0066f5',
          700: '#0052d6',
          800: '#0042ae',
          900: '#003a8c',
          950: '#00246e',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        dark: {
          100: '#d5d5d5',
          200: '#ababab',
          300: '#808080',
          400: '#565656',
          500: '#2b2b2b',
          600: '#222222',
          700: '#1a1a1a',
          800: '#111111',
          900: '#090909',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'slide-right': 'slideRight 0.5s ease-in-out forwards',
        'grow': 'grow 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        grow: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'skill': '0 2px 5px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
