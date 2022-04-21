export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Mirko-site",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  vue: {
    config: {
      productionTip: false,
      devtools: false,
    },
  },

  axios: {
    baseURL: process.env.DEV_END_POINT || "http://localhost:3500/api/video",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Disable HMR messages
    hotMiddleware: {
      client: {
        noInfo: true,
      },
    },
  },
};
