<script setup lang="ts">
export interface NavLinkInterface {
  label: string
  variant?: 'vertical' | 'horizontal'
}

withDefaults(defineProps<NavLinkInterface>(), {
  variant: 'horizontal'
})
</script>

<template lang="pug">
nav(data-component='nav' :aria-label='label')
  ul(v-if='variant == "vertical"' class='grid justify-items-center gap-x-4 gap-y-12')
    slot
  ul(v-else class='flex flex-wrap gap-x-4 gap-y-12')
    slot
</template>
