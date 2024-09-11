<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'blue'
  }
})
</script>

<template>
    <h1 :style="{color: props.color}">Hello, {{ props.title }} !!!</h1>
</template>