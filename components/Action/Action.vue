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
  @apply bg-grey text-black inline-block h-[24px] font-sans text-base leading-6 text-center border-2 overflow-hidden text-ellipsis whitespace-nowrap px-5 relative;
}
</style>

  // bg: 'secondary',
  // color: 'text',
  // appearance: 'none',
  // display: 'inline-block',
  // height: '2.4rem',
  // fontFamily: 'body',
  // fontSize: 'body',
  // lineHeight: 'body',
  // textAlign: 'center',
  // borderRadius: 0,
  // borderWidth: 2,
  // borderStyle: 'solid',
  // borderImage: `url(${unselected}) 2 stretch`,
  // textDecoration: 'none',
  // verticalAlign: 'top',
  // textOverflow: 'ellipsis',
  // whiteSpace: 'nowrap',
  // overflow: 'hidden',
  // userSelect: 'none',
  // px: '2rem',
  // outline: 0,
  // position: 'relative',
  // '&:focus, &:active': {
  //   bg: 'primary',
  //   color: 'text',
  //   borderImage: `url(${selected}) 2 stretch`,
  // },