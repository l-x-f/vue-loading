<template>
  <div class="about">
    <h1 v-loading="loading">This is an HomeView page</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
