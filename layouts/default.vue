<template lang="pug">
div(class='relative grid h-screen w-full grid-rows-[auto,_1fr] overflow-hidden')
  title-bar(variant='screen')
    div Lance Guyatt, Web Developer. Copyright © 2000-2022 All Rights Reserved
  main(class='relative grid')
    slot
</template>
