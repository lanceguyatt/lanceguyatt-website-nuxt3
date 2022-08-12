<script setup lang="ts">
export interface TitleBarInterface {
  variant?: 'screen' | 'window'
}

withDefaults(defineProps<TitleBarInterface>(), {
  variant: 'window'
})
</script>

<template lang="pug">
div(
  data-component='title-bar'
  :class='`c-title-bar flex items-center height-[2.2rem] c-title-bar--${variant}`'
)
  div(class='no-wrap flex h-[18px] flex-auto overflow-hidden text-ellipsis')
    slot
</template>

<style lang="postcss">
.c-title-bar {
  &--screen {
    @apply bg-black text-grey;
  }

  &--window {
    @apply border-y-[0.2rem] border-x-[0.1rem];
    border-image: url(/images/window-titlebar.svg) 2 1 2 1 stretch;
  }
}
</style>
