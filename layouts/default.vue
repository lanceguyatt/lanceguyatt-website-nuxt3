<template lang="pug">
div(class='grid h-screen w-full overflow-hidden relative grid-rows-[auto,_1fr]')
  title-bar(variant='screen')
    div Lance Guyatt, Web Developer. Copyright © 2000-2022 All Rights Reserved
  main(class='grid relative')
    slot
</template>