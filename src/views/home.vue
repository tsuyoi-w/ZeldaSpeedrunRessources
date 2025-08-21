<template>
  <div class="PanelContainer" v-if="games && Object.keys(games).length">
    <GamePanel
      v-for="game in games"
      :title="game.title"
      :img="game.img"
      @click="openGameRess(game.ID)"
      :Hide="game.Hide"
    ></GamePanel>
  </div>
  <div v-else>Aucun Jeux</div>
</template>

<script setup>
import GamePanel from '@/components/GamePanel.vue'
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const games = ref(null)
const selectedGame = ref(null)

const openGameRess = (ID) => {
  selectedGame.value = ID

  router.push('/' + ID)
}

onMounted(async () => {
  const response = await fetch('json/game.json')
  games.value = await response.json()
})
</script>

<style>
.PanelContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.PanelContainer:hover {
  cursor: pointer;
}
</style>
