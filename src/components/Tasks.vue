<script setup lang="ts">
</script>

<template>
    <div class="game-tasks">
        <div class="task fail">Задание: В пароле не должно быть пробелов</div>
        <div class="task done">Задание: В пароле не должно быть пробелов</div>
        <div class="task">Задание: В пароле не должно быть пробелов</div>
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