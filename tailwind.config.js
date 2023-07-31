// prettier-ignore
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'firstblack' : 'rgba(0, 0, 0, 0.6)',
        'secondblack' : 'rgba(0, 0, 0, 0)',
        'thridblack' : 'rgba(0, 0, 0, 0.8)',
        'primary' : '#E50914'
      },
    },
  },
  plugins: [],
};
