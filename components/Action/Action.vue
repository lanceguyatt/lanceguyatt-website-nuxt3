<script setup lang="ts">
export interface ActionProps {
  as?: string
}

withDefaults(defineProps<ActionProps>(), {
  as: 'button'
})
</script>

<template lang="pug">
component(:is='as' class='c-action')
  slot
</template>

<style lang="postcss">
.c-action {
  @apply relative inline-block h-[24px] overflow-hidden text-ellipsis whitespace-nowrap border-2 bg-grey px-5 text-center font-sans text-base leading-6 text-black;
}
</style>
