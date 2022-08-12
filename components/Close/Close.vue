<script setup lang="ts">
export interface CloseInterface {
  name?: string
  url?: string
}

withDefaults(defineProps<CloseInterface>(), {
  name: 'Close this window',
  url: '/'
})
</script>

<template lang="pug">
nuxt-link(:to='url' data-component='close' class='bg-red')
  span(class='sr-only') {{ name }}
</template>

<style lang="postcss">
[data-component='close'] {
  @apply relative block h-[2.2rem] w-[2rem] bg-[url(/images/close.svg)] bg-cover;

  &:active {
    background-position: -2rem 0;
  }
}
</style>
