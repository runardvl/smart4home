// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxthq/studio",
    "nuxt-typed-router",
  ],

  css: ["~/assets/css/main.css"],

  ui: {
    colorMode: false,
  },

  content: {
    preview: {
      api: "https://api.nuxt.studio",
      gitInfo: {
        name: "smart4home",
        owner: "runardvl/smart4home",
        url: "https://github.com/runardvl/smart4home.git",
      },
    },
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        },
        highlight: {
          theme: "github-light",
        },
      },
    },
    renderer: {},
  },
  studio: {
    enabled: true, // Включаем Studio
  },
});
