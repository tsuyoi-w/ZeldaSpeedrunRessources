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
.GamePanel {
  padding: 15px;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.GamePanel h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
}
</style>
