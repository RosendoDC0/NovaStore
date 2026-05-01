// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/NovaStore/'
  },
  nitro: {
    preset: 'github_pages'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['vuetify-nuxt-module'],

  vuetify: {
    moduleOptions: {
      /* treeshaking: true */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#5C6BC0',
              secondary: '#7E57C2',
              accent: '#FF7043',
              background: '#F8F9FB',
              surface: '#FFFFFF',
              'on-primary': '#FFFFFF',
            },
          },
        },
      },
      defaults: {
        VCard: { rounded: 'xl', elevation: 0 },
        VBtn: { rounded: 'lg' },
      },
    },
  },
})
