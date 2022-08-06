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
  }
  // vite: {
  //   optimizeDeps: {
  //     include: ['@babel/runtime/regenerator']
  //   }
  // }
})
