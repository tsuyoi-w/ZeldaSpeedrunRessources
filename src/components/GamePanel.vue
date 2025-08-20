<template>
  <div class="GamePanel">
    <img :src="img" :alt="gameID" />
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  img: String,
  gameID: String,
})
</script>

<style>
@font-face {
  font-family: 'HyliaSerifBeta';
  src: url('font/HyliaSerifBeta-Regular.otf') format('opentype');
}

.GamePanel {
  padding: 15px;
  width: 400px;
  height: 400px;
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

img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
}
</style>
