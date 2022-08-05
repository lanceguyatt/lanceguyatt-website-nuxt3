<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Lance Guyatt, Web Developer` : 'Lance Guyatt, Web Developer';
  }
})
</script>

<template lang="pug">
nuxt-layout
  nuxt-page
</template>
