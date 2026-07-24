export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#000000', // Kept for backwards compatibility but mapped to black
          white: '#FFFFFF',
          black: '#000000',
        },
        blue: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          500: '#64748B',
          600: '#0F172A',
          700: '#000000',
          800: '#000000',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          400: '#A1A1AA',
          500: '#71717A',
          700: '#3F3F46',
          900: '#18181B',
        },
        success: '#16A34A',
        error: '#DC2626',
        warning: '#D97706',
        info: '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
      },
      borderRadius: {
        DEFAULT: '0px',
        md: '2px',
        lg: '4px',
        xl: '6px',
        '2xl': '8px',
        '3xl': '12px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02)',
      },
      zIndex: {
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
      },
    },
  },
  plugins: [],
};