import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  // build: {
  //   transpile: ['parse-entities']
  // },
  typescript: {
    typeCheck: true
  },
  content: {
    documentDriven: true,
    globals: {
      theme: {
        where: [
          {
            _id: 'content:_theme.yml'
          }
        ],
        without: ['_']
      }
    }
  },
  app: {
    head: {
      link: [{ rel: 'author', href: '/humans.txt', type: 'text/plain' }]
    }
  }
  // vite: {
  //   optimizeDeps: {
  //     include: ['@babel/runtime/regenerator']
  //   }
  // }
})
