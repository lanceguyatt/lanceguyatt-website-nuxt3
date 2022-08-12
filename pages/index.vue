<script setup lang="ts">
definePageMeta({
  layout: 'default',
  // documentDriven: false
})

const { navigation, page, surround, globals } = useContent()

// const workbenchQuery = queryContent().where({ _path: '/about' }).findOne()

// If you'd prefer to pass along raw `QueryBuilderParams`:
// const workbenchQuery = {
//   where: [
//     { _path: 'about' },
//   ],
// }
</script>

<template lang="pug">
window(:name='page.title' as='article')
  pre {{ page }}
  content-navigation(v-slot='{ navigation }')
    Nav(label='primary' variant='vertical')
      li(v-for='item in navigation' :key='item._path')
        nav-link(:name='item.title' :url='item._path' :icon='item.icon')
</template>
