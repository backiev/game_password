<script setup lang="ts">
import task from '@/ui/task.vue';
import { usePasswordStore } from '@/store/password.store';

const store = usePasswordStore();
const tasks = store.tasks;

</script>

<template>
    <div class="game-tasks">
        <task 
            v-for="task in tasks"
            :key="task.id"
            :text="task.text" 
            :status="task.status"
        >
        </task>
    </div>
</template>

<style scoped lang="scss">
    .game-tasks {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .task {
        padding: 8px;
        min-height: 40px;
        background-color: #BCBCBC;
        &.fail {
            background-color: #CD5C5C;
        }
        &.done {
            background-color: #71BE1E;
        }
    }
</style>