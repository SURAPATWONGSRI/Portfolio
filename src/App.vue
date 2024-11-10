<script setup>
import { RouterView } from 'vue-router'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <SpeedInsights />
  <NavBar />
  <RouterView />
</template>

<style scoped>
* {
  font-family: 'Kanit', sans-serif;
}
html {
  scroll-behavior: smooth;
}
</style>
