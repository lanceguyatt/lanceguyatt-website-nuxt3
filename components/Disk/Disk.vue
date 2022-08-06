<template lang="pug">
div(data-component='disk' class='block bg-cover')
  slot
</template>

<style lang="postcss" scoped>
[data-component='disk'] {
  @apply h-[4.6rem] w-[4.3rem] bg-[url('/images/disk.svg')];
}
</style>
