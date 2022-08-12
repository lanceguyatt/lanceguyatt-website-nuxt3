<template lang="pug">
button(data-component='zoom' type='button' aria-label='Zoom')
</template>

<style lang="postcss">
[data-component='zoom'] {
  @apply h-[2.2rem] w-[2.3rem] bg-[url('/images/zoom.svg')] bg-cover;

  &:active {
    background-position: -2.3rem 0;
  }
}
</style>
