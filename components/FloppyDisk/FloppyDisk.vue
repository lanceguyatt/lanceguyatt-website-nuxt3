<script setup lang="ts">
export interface FloppyDiskInterface {
  animate?: boolean
}

withDefaults(defineProps<FloppyDiskInterface>(), {
  animate: false
})
</script>

<template lang="pug">
svg(
  data-component='floppy-disk'
  viewbox='0 0 134 120'
  class='h-[12rem] w-[13.4rem] animate-insert'
)
  g(fill='none' fillRule='evenodd')
    path(
      d='M128 6V4h2v2h2v2h2v112H0V4h2V2h2V0h10v40h2v2h86v-1h2V2h2V0h20v2h2v4zm0 2h4-4z'
      fill='#203080'
    )
    path(fill='#948976' d='M102 41v1H36v-1h-2V0h70v41z')
    path(
      d='M120 52v2h2v66H14V54h2v-2h104zM10 110v4H4v-4h6zM34 0v41h2v1H16v-2h-2V2h4V0h16zm55 8v30H75V8h14zM8 6v2h1v2h1v2H8v4H6v-4H4v-2h1V8h1V6h2z'
      fill='#202060'
    )
    path(fill='#fff' d='M18 58v-4h100v4h2v62H16V58z')
</template>
