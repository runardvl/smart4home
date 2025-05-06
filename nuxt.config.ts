import components from "#nuxt-component-meta";

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

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    "components:extend": (components) => {
      const globals = components.filter((c) =>
        ["UButton"].includes(c.pascalName),
      );

      globals.forEach((c) => (c.global = true));
    },
  },

  css: ["~/assets/css/main.css"],

  typescript: {
    strict: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  routeRules: {
    "/": { prerender: true },
  },

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
          theme: "github-dark",
        },
      },
    },
    renderer: {},
  },
  studio: {
    enabled: true, // Включаем Studio
  },
});
