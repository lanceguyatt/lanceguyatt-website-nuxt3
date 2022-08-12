<template lang="pug">
button(type='button' data-component='depth')
</template>

<style lang="postcss">
[data-component='depth'] {
  @apply h-[2.2rem] w-[2.3rem] bg-[url('/images/depth.svg')] bg-cover;

  &:active {
    background-position: -2.3rem 0;
  }
}
</style>
