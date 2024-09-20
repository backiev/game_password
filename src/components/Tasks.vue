<script setup lang="ts">
import task from '@/ui/task.vue';
import { usePasswordStore } from '@/store/password.store';
import { tasks as tasks_array } from '@/data/tasks/tasks';

const store = usePasswordStore();
const tasks = store.tasks;

</script>

<template>
    <div class="game-tasks__wrapper">
        <div 
            class="game-title" 
            v-if="tasks.length >= 2"
        >
            Выполнено заданий: {{ tasks.length }} (из {{ tasks_array.length }})
        </div>
        <div class="game-tasks">
            <task 
                v-for="task in tasks"
                :key="task.id"
                :text="task.text" 
                :status="task.status"
            >
            </task>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .game-tasks__wrapper {
        margin-top: 20px;
        width: 100%;
    }

    .game-tasks {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>