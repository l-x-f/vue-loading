<template>
  <div class="about">
    <h1 v-loading="loading">This is an HomeView page1</h1>
    <h1 v-loading="loading">This is an HomeView page2</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)
</script>
