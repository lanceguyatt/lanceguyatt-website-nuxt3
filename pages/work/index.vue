<template lang="pug">
content-list(path='/work' v-slot='{ list }')
  nav
    //- pre {{ list }}
    ul
      li(v-for='project in list' :key='project._id')
        nuxt-link(:to='project._path') {{ project.title }}
  //- pre(v-for='project in list' :key='project._id') {{ project }}
  template(id='not-found')
    h2 No work found
</template>