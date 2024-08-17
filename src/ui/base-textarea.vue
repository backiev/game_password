<script setup lang="ts">

</script>

<template>
    <div class="block">
        <textarea class="textarea" cols="30" rows="3" placeholder="Пароль"></textarea>
        <button class="button">Проверить</button>
    </div>
</template>


<style lang="scss" scoped>
    .block {
        display: flex;
        // align-items:flex-start;
        gap: 10px;
    }
    .textarea {
        background-color: white;
        color: black;
        border-radius: 4px;
        resize: none;
        outline: none;
        padding: 4px 8px;
    }
    .button {
        background-color: white;
        color: black;
        border-radius: 4px;
        padding: 5px 10px;
        outline: none;
    }
</style>