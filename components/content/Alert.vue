<script setup lang="ts">
export interface AlertInterface {
  animate?: boolean
}

withDefaults(defineProps<AlertInterface>(), {
  animate: false
})
</script>

<template lang="pug">
div(role='alert' :class='`border-current border-2 p-4 text-center text-red ${animate && "animate-pulse"}`')
  slot
</template>

