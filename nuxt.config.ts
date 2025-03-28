import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    baseURL: "/mathscroll/",
  },
  routeRules: {
    "/**": { prerender: true }
  },
  nitro: {
    preset: "github_pages"
  }
});
