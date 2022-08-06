<script setup lang="ts">
interface Props {
  variant?: 'screen' | 'window'
}

withDefaults(defineProps<Props>(), {
  variant: 'window'
})
</script>

<template lang="pug">
div(
  :class='`c-title-bar flex items-center height-[22px] c-title-bar--${variant}`'
)
  div(class='no-wrap flex h-[18px] flex-auto overflow-hidden text-ellipsis pl-1')
    slot
</template>

<style lang="postcss">
.c-title-bar {
  &--screen {
    @apply bg-black text-grey;
  }

  &--window {
    @apply border-[0.2rem];
  }
}
</style>
