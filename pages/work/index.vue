<script setup lang="ts">
const { page } = useContent()
</script>

<template lang="pug">
window(:name='page.title')
  content-query(:path='$route.path' :where="{ title: { $ne: 'Work' } }" :sort="{ datePublished: 1 }" :only="['title', '_path']"  v-slot='{ data }' )
    Nav(:label='page.title')
      li(v-for='project of data' :key='project._path')
        nav-link(:name='project.title' :url='project._path')
    template(id='not-found')
      p No work found.
</template>
