<template>
  <header>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <RouterLink to="/">ZELDA SPEEDRUN RESSOURCES</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup></script>

<style>
* {
  margin: 0px;
  list-style: none;
  padding: 0px;
  text-decoration: none;
  color: white;
}

body {
  background-color: rgb(49, 48, 48);
}

header {
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 30px;
  border-bottom: solid white 5px;
}

li {
  background-color: black;
  margin: 20px;
  height: 50px;
  border: solid white 3px;
  font-size: 30px;
  font: bold;
}

li a {
  position: relative;
  top: 5px;
  left: 5px;
}
</style>
