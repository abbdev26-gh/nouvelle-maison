import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: [
    './app/assets/css/main.css',
    'node-waves/dist/waves.min.css'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nouvelle Maison - Digital Realty Solutions Ghana',
      meta: [
        { name: 'description', content: 'Digital-driven realty solutions provider in Ghana. Property sales, rentals, advisory, and development services.' },
        { name: 'author', content: 'Nouvelle Maison' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/logo.jpg' }
      ],
      script: [
        {
          src: '/waves.min.js',
          type: 'text/javascript'
        }
      ]
    }
  }
})