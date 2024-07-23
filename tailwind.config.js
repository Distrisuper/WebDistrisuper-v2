/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#022C66',
        secondary: '#1B9FC6',
        base: '#F5F8FF',
      },
    },
  },
  plugins: [],
}

