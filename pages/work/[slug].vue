<template lang="pug">
content-doc(v-slot='{ doc }' tag='article')
  //- Head
  //- Title {{ doc.title }} - Work
  article(class='bg-grey')
    h1(class='hidden') {{ doc.title }}

    dl(class='grid gap-2 sm:grid-cols-[auto,_1fr]')
      dt Name
      dd {{ doc.title }}
      template(v-if='doc.url')
        dt Url
        dd {{ doc.url }}
      template(v-if='doc.tags')
        dt Technologies
        dd
          ul
            li(v-for='tag in doc.tags' :key='tag') {{ tag }}

    nav(class='flex justify-between' aria-label='Actions')
      action(as='nuxt-link' to='/work') Cancel
      action(
        as='a'
        :href='doc.url'
        target='_blank'
        rel='external noopener noreferrer'
      ) Launch
    //- content-renderer(:value='doc')
    //- pre {{ doc }}
</template>

<style lang="postcss" scoped>
dt {
  @apply flex items-center after:content-[':'];
}

dd {
  @apply border-4 p-1;
  border-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMSAyNmg2N3YySDF2LTJ6TTY2IDJoMnYyNGgtMlYyem0xLTJoMXYyaC0xVjB6TTIgMmg2M3YySDJWMnptMCAyaDJ2MjBIMlY0em0wIDIwaDF2Mkgydi0yeiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0wIDBoNjd2MkgwVjB6bTAgMmgydjI0SDBWMnptMCAyNGgxdjJIMHYtMnptMy0yaDYzdjJIM3YtMnpNNjQgNGgydjIwaC0yVjR6bTEtMmgxdjJoLTFWMnoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+Cg==)
    4 stretch;
}
</style>
