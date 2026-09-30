/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#111318',
        section: '#14171E',
        secondary: '#171A22',
        panel: '#1C202B',
        elevated: '#242A38',
        navbar: '#15171D',
        terminal: '#171821',
        'terminal-header': '#20212C',
        border: '#303644',
        'card-hover': '#242A38',
        slate: {
          100: '#F5F7FA',
          200: '#DCE2EC',
          300: '#C0C7D4',
          400: '#9AA5B5',
          500: '#7E899A',
        },
        blue: {
          300: '#9BB7FF',
          400: '#5B8CFF',
          500: '#4F80F4',
          600: '#416FE2',
          700: '#345CC4',
        },
        purple: {
          200: '#D1C1FF',
          300: '#BDA5FF',
          400: '#A984FF',
          500: '#9B6DFF',
          600: '#8756EE',
          700: '#7448D1',
        },
        emerald: {
          300: '#91E8D4',
          400: '#4FD1B5',
          500: '#37B99F',
          600: '#269A83',
        },
      },
    },
  },
  plugins: [],
};
