<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Game from './components/Game.vue';

</script>

<template>
  <div class="wrapper">
    <Header />
    <Game />
    <Footer />
  </div>
</template>

<style lang="scss">
  .wrapper {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #333;
    // padding: 0 20px;
    color: white;
  }
</style>
