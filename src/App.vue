<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Game from './components/Game.vue';

</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <Game />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .main {
    flex-grow: 1;
  }

</style>
