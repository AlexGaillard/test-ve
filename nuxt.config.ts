// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: "http://localhost:8055",
      directusUrl: "http://localhost:8080",
    },
  },
});
