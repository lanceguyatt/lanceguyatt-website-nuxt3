
<template lang="pug">
div(data-component='disk' class=' w-[4.3rem] h-[4.6rem] bg-disk')
  slot
</template>

<style lang="postcss" scoped>
[data-component='disk'] {
  @apply bg-disk-left;
}
</style>