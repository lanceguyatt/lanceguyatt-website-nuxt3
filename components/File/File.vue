<template lang="pug">
span(data-component='file' class='block bg-cover')
  slot
</template>

<style lang="postcss" scoped>
[data-component='file'] {
  @apply h-[6.2rem] w-[4.6rem] bg-[url('/images/file.svg')];
}
</style>
