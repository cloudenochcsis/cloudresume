/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        terminal: {
          950: '#06090E',
          900: '#0B0F17',
          850: '#0E1420',
          800: '#151D2C',
          700: '#1E293B',
          600: '#334155',
          border: '#1E293B',
          grid: 'rgba(255, 255, 255, 0.04)',
        },
        electric: {
          50: '#EEF6FF',
          100: '#D9ECFF',
          200: '#BCE0FF',
          300: '#8AC8FF',
          400: '#52A7FF',
          500: '#0066FF',
          600: '#0052D6',
          700: '#003EAB',
        },
        teal: {
          500: '#14B8A6',
          600: '#0D9488',
        },
      },
      borderRadius: {
        xl: '0.75rem', // 12px max requested
        '2xl': '0.75rem',
      },
      boxShadow: {
        glow: '0 0 20px -5px rgba(0, 102, 255, 0.25)',
        card: '0 4px 12px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
