<script setup lang="ts">
  import baseTextarea from '../ui/base-textarea.vue';
  import Tasks from '../components/Tasks.vue';
</script>

<template>
  <div class="game">
    <div class="game-wrapper">
      <div class="game-block">
        <div class="game-input">
          <base-textarea></base-textarea>
        </div>
        <tasks></tasks>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .game {
    &-wrapper {
      width: min-content;
      margin: 25px auto; 
      
    }
  }
</style>
