<template lang="pug">
main(class='flex gap-6 flex-col md:flex-row items-center md:justify-between md:items-end min-h-screen w-full overflow-hidden bg-purple p-6 md:p-7 text-tan')
  div(class='sm:w-[18rem]')
    img(src='/images/tick.svg' loading='eager' alt='' class='w-[16.5rem] h-[15rem] block mb-6')
    slot
  nuxt-link(to='/' aria-label='Return to Workbench')
    div(class='h-[16.9rem] w-[15.6rem] relative')
      floppy-drive
      floppy-disk(class='absolute bottom-0 left-[1.2rem]' animate)
</template>
