/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Custom breakpoint
        // Add more custom breakpoints here
      },
    },
  },
  plugins: [require("daisyui")],
  autoprefixer: {},
  daisyui: {
    themes: ['light'],
  },

}

