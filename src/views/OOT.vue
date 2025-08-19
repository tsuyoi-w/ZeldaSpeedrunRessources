<template>
  <ul v-if="games && games.OOT">
    <li v-for="(value, key) in games.OOT.link">
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
