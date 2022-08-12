<script setup lang="ts">
const { page } = useContent()

useContentHead(page)
</script>

<template lang="pug">
window(:name='page.title')
  content-query(:path="$route.path" :where="{ title: { $ne: 'About' } }" v-slot=" {data }")
    pre {{ data }}
    Nav(:label='page.title')
      li(v-for='link of data' :key='link._path')
        nav-link(:name='link.title' :url='link.url' rel='external noopener noreferrer' target='_blank' icon='file')
  template(id='not-found')
    p No links found.
</template>