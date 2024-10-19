<script setup lang="ts">
    import task from '@/ui/task.vue'
    import {usePasswordStore} from '@/store/password.store'
    import {tasks as tasks_array} from '@/data/tasks/tasks'
    import {storeToRefs} from 'pinia'

    const store = usePasswordStore()
    const {tasks} = storeToRefs(store)
</script>

<template>
    <div class="game-tasks__wrapper">
        <div class="game-title" v-if="tasks.length >= 2">
            Выполнено заданий: {{ tasks.length }} (из {{ tasks_array.length }})
        </div>
        <div class="game-tasks">
            <TransitionGroup name="tasks">
                <task
                    v-for="element in tasks"
                    :key="element.id"
                    :text="element.text"
                    :status="element.status ? element.status : ''">
                </task>
            </TransitionGroup>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .game-tasks__wrapper {
        margin-top: 20px;
        width: 100%;
    }
    .tasks-move,
    .tasks-enter-active,
    .tasks-leave-active {
        transition: all $transition-tasks ease;
    }

    .tasks-enter-from,
    .tasks-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .tasks-leave-active {
        position: absolute;
    }
    .game-tasks {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>
