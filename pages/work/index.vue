<template lang="pug">
content-list(v-slot='{ list }' path='/work')
  Nav(label='Work')
    li(v-for='project in list' :key='project._id')
      nav-link(:name='project.title' :url='project._path')
  template(id='not-found')
    h2 No work found
</template>
