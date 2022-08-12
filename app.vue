<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Lance Guyatt, Web Developer`
      : 'Lance Guyatt, Web Developer'
  }
})

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0)
})
</script>

<template lang="pug">
Html
  Head
    //- Link(rel='icon' href='/favicon.ico')
    //- Link(rel='author' href='/humans.txt' type='text/plain')
  nuxt-layout
    nuxt-page
</template>
