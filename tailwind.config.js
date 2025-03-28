/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
    "./assets/**/*.css",
    "./utils/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}