<script setup lang="ts">
  import baseTextarea from '../ui/base-textarea.vue';
  import Tasks from '../components/Tasks.vue';
  import { usePasswordStore } from '@/store/password.store'

  const store = usePasswordStore();
  const updateHandle = (value: string) => {
    store.updatePassword(value);
  }
  const checkPasswordHandle = () => {
    store.checkTasks();
  }
  
</script>

<template>
  <div class="game">
    <div class="game-wrapper">
      <div class="game-block">
        <div class="game-input">
          <div class="block">
            <base-textarea
              v-model="store.password"
              @update="updateHandle"  
            ></base-textarea>
            <button class="button" @click="checkPasswordHandle">Проверить</button>
          </div>
        </div>
        <tasks></tasks>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .block {
        display: flex;
        // align-items:flex-start;
        gap: 10px;
    }
    .button {
        background-color: $color-white;
        color: $color-black;
        border-radius: 4px;
        padding: 5px 10px;
        outline: none;
    }
  .game {
    &-wrapper {
      width: min-content;
      margin: 25px auto; 
      
    }
  }
</style>
