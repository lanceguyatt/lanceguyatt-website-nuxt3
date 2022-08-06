<template lang="pug">
span(data-component='drive' class='block bg-cover')
  slot
</template>

<style lang="postcss" scoped>
[data-component='drive'] {
  @apply h-[4.4rem] w-[8.5rem] bg-[url('/images/drive.svg')];
}
</style>
