export default defineNuxtConfig({
  app: {
    baseURL: '/NovaStore/'
  },

  nitro: {
    preset: 'github_pages'
  },

  css: ['vuetify/lib/styles/main.sass'],

  build: {
    transpile: ['vuetify']
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['vuetify-nuxt-module'],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
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
    },
  },
})