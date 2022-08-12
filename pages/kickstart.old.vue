<template lang="pug">
article
  content-doc(v-slot='{ doc }')
    content-renderer(:value='doc')
</template>
