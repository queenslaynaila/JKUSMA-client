/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        poly: ['Poly', 'sans-serif'],
      },
      colors: {
        primary: '#FFCE3C',
        sand: '#FDECBA',
        light: '#FFF4D2',
      },
      screens: {
        xs: '280px',
        ms: '375px',
        tablet: '960px',
      },
    },
  },
  plugins: [],
}
