<template lang="pug">
main(
  class='flex min-h-screen w-full flex-col items-center gap-6 overflow-hidden bg-purple p-6 text-tan md:flex-row md:items-end md:justify-between md:p-7'
)
  div(class='sm:w-[18rem]')
    img(
      src='/images/tick.svg'
      loading='eager'
      alt=''
      class='mb-6 block h-[15rem] w-[16.5rem]'
    )
    slot
  nuxt-link(to='/' aria-label='Return to Workbench')
    div(class='relative h-[16.9rem] w-[15.6rem]')
      floppy-drive
      floppy-disk(class='absolute bottom-0 left-[1.2rem]' animate)
</template>
