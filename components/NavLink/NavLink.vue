<script setup lang="ts">
export interface NavLinkInterface {
  name?: string
  url: string
  icon?: 'disk' | 'drawer' | 'drive' | 'file'
}

withDefaults(defineProps<NavLinkInterface>(), {
  name: '',
  icon: 'drawer'
})
</script>

<template lang="pug">
nuxt-link(:to='url' data-component='nav-link')
  disk(v-if='icon == "disk"')
  drawer(v-if='icon == "drawer"')
  drive(v-if='icon == "drive"')
  file(v-if='icon == "file"')
  slot
  | {{ name }}
</template>

<style lang="postcss">
[data-component='nav-link'] {
  @apply inline-flex max-w-[9rem] flex-col items-center gap-2 text-center;
}
</style>
