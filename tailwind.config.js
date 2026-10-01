/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: false,
    extend: {
      colors: {
        // Brand palette from the Glial Initiative identity kit.
        // Text/button shades are darkened so they pass WCAG AA on white.
        navy: {
          DEFAULT: '#17162c',
          800: '#23223d',
          700: '#33324f',
        },
        teal: {
          50: '#eef8f6',
          100: '#d6efea',
          400: '#47b8a6', // brand teal: fills and accents only (2.4:1 on white)
          600: '#237568', // text, links, buttons (5.5:1 on white)
          700: '#1c5f55',
        },
        indigo: {
          50: '#f1f1f8',
          100: '#e1e2f0',
          400: '#676cab', // brand indigo (4.9:1 on white)
          600: '#575c9b',
          700: '#484c85',
        },
        ink: {
          DEFAULT: '#17162c',
          muted: '#4b5060',
          subtle: '#6b7080',
        },
        line: '#e3e6ea',
        surface: '#f6f8f9',
      },
      fontFamily: {
        serif: ['"Source Serif 4 Variable"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3 Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        content: '75rem',
        prose: '42rem',
      },
      borderRadius: {
        DEFAULT: '6px',
      },
    },
  },
  plugins: [],
}
