export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { 'xsm': { 'max': '640px' } },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}