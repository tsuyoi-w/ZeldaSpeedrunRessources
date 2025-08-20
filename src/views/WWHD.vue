<template>
  <ul v-if="games && games.WWHD">
    <h2>{{ games.WWHD.title }}</h2>
    <li v-for="(value, key) in games.WWHD.link">
      <a :href="value">{{ key }}</a>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const games = ref(null)

onMounted(async () => {
  const response = await fetch('json/game.json')
  games.value = await response.json()
})
</script>
