module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        navy: {
          950: '#070A10',
          900: '#0B0F17',
          850: '#0F1522',
          800: '#141C2C',
          700: '#1E293B',
          600: '#334155',
        },
        editorial: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          muted: '#F1F5F9',
          border: '#E2E8F0',
          darkBorder: '#CBD5E1',
          text: '#0F172A',
          subtext: '#334155',
          caption: '#64748B',
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
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        primary: {
          500: '#0066FF',
          600: '#0052D6',
        }
      },
      borderRadius: {
        'xl': '0.75rem', // 12px max requested
        '2xl': '0.75rem', // constrain 2xl to 12px max as requested
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)',
        'card': '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
        'navy-card': '0 4px 12px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
