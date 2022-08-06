<template lang="pug">
span(data-component='drawer' class='block bg-cover')
  slot
</template>

<style lang="postcss" scoped>
[data-component='drawer'] {
  @apply h-[3.8rem] w-[6.5rem] bg-[url('/images/drawer.svg')];
}
</style>
