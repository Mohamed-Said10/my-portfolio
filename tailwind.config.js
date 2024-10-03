export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { 
        'xsm': { 'max': '640px' },
        'sm': '640px',
        'md': '768px', 
        'lg': '1024px',
     },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}