/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Exact Figma design tokens ──────────────────────────────────
        rr: {
          dark:        '#11142d',   // Primary dark (headings, dark bg)
          navy:        '#1e3e85',   // Deep navy blue (CTA labels, button text)
          sky:         '#52b4da',   // Accent sky blue (logo "Remote", active indicators)
          'sky-light': '#c2eeff',   // Badge background
          'sky-btn':   '#4da8cc',   // Navbar Sign Up button bg
          teal:        '#19cdb8',   // Avatar / decorative teal
          orange:      '#ffaa45',   // Decorative orange circle
          red:         '#ff1f1f',   // Decorative red dot
          purple:      '#8e80fc',   // CTA inner card
          'purple-bg': '#f4f0ff',   // CTA section background
          'blue-lt':   '#ecf2ff',   // Pricing detail bg
          'gray-1':    '#808191',   // Muted / disabled text
          'gray-2':    '#6d6e7a',   // FAQ answer text
          'gray-3':    '#767784',   // CTA body text
          'text-dark': '#323445',   // Feature list items
          'near-white':'#f5f7fe',   // Nav button label
        },
        // Keep brand for any remaining legacy usage
        brand: {
          50:  '#eff4ff',
          100: '#dce8ff',
          200: '#c0d4ff',
          600: '#1f45ec',
          700: '#1835da',
        },
      },
      fontFamily: {
        // Poppins replaces Inter — matches Figma exactly
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1040px', // Figma content container width
      },
      animation: {
        'fade-up':    'fadeUp 0.65s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'fade-left':  'fadeLeft 0.65s ease-out forwards',
        'fade-right': 'fadeRight 0.65s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%':   { opacity: '0', transform: 'translateX(28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
