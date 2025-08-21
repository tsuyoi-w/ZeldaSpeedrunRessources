<template>
  <div v-if="Hide === false" class="GamePanel">
    <img :src="img" :alt="gameID" />
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  img: String,
  gameID: String,
  Hide: Boolean,
})
</script>

<style>
.GamePanel {
  padding: 15px;
  margin-bottom: 50px;
  width: 400px;
  height: 400px;
  flex: 1 0 20%;
  max-width: 20%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.GamePanel h1 {
  text-align: center;
  display: flex;
  align-items: center;
  font-family: 'HyliaSerifBeta', serif;
  justify-content: center;
}

.GamePanel img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
}
</style>
