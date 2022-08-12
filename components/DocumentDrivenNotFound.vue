<script setup lang="ts">
definePageMeta({
  documentDriven: false,
  layout: "guru-meditation"
})

const foo = 'bar'
</script>

<template lang="pug">
h1 {{ foo }}
alert(animate)
  p
    | Software Failure. Press left mouse button to continue.
    br
    | Guru Meditation #00004040.00004040
</template>