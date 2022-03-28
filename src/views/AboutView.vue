<template>
  <div class="about">
    <h1 v-loading="loading">false -> true</h1>
    <h1 v-loading="false">false</h1>
    <h1 v-loading="true">true</h1>
    <h1 v-loading="loading1">true-> false</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
setTimeout(() => {
  loading.value = true
}, 2000)

const loading1 = ref(true)
setTimeout(() => {
  loading1.value = false
}, 2000)
</script>
