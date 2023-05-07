/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "Titillium-Web": ['"Titillium Web"', 'sans-serif']
      },
      colors: {
        'green-main': 'rgb(91, 184, 92)',
        'green-main-dark': 'rgb(68, 157, 68)',
      },
      backgroundColor: {
        'green-main': 'rgb(91, 184, 92)',
        'green-main-dark': 'rgb(68, 157, 68)',
        'slate-750': 'rgb(51, 51, 51)'
      },
      borderColor: {
        'green-main': 'rgb(91, 184, 92)',
        'green-main-dark': 'rgb(68, 157, 68)',
      },
      keyframes: {
        'spin': {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        'loader': 'spin 0.5s infinite linear'
      }
    },
  },
  plugins: [],
}
