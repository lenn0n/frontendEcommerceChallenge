/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./public/*.html"],
  theme: {
    screens: {
      'sm': '420px',
      'msm': '571px',
      'md': [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        // {'min': '668px', 'max': '767px'},
        {'min': '868px'}
      ],
      'lg': '1100px',
      'xl': '1400px',
      'xxl': '1500px',
      '3xl': '1700px',
    },
    extend: {
      colors: {
        'dark': '#110606'
      }
    },
  },
  plugins: [],
}

