<script setup lang="ts">
export interface WindowInterface {
  as?: string
  name: string
}

withDefaults(defineProps<WindowInterface>(), {
  as: 'section'
})
</script>

<template lang="pug">
component(:is='as' class='relative flex min-h-[20rem] flex-auto flex-col bg-grey')
  title-bar(variant='window' class='bg-blue')
    close(class='left-[-0.1rem]')
    | {{ name }}
    div(class='flex')
      zoom
      depth

  div(class='c-window__main relative flex flex-auto flex-col')
    div(
      class='mt-[-0.6rem] mr-[-3.6rem] mb-[-5rem] flex flex-auto flex-col overflow-y-auto p-4'
    )
    slot
</template>

<style lang="postcss">
.c-window__main {
  border-width: 0.6rem 5.4rem 7rem 0.5rem;
  border-image: url(/images/window.svg) 6 54 70 5 stretch;
}
</style>
