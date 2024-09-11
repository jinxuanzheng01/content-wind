export default defineNuxtConfig({
  extends: 'content-wind',

  modules: [
      '@nuxthq/studio'
  ],

  studio: {
    enabled: true
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-09-11'
})