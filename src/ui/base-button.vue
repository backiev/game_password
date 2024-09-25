<script lang='ts' setup>
const props = defineProps({
    text: String,
})
</script>

<template>
    <button class="button">{{ text ? text : 'Закрыть' }}</button>
</template>

<style lang='scss' scoped>
    .button {
        // border: 1px solid $color-black;
        border-radius: 8px;
        padding: 10px 20px;
        background-color: $color-blue-light;
        color: $color-white;
        transition: background-color .2s ease-in-out;
        &:hover {
            background-color: $color-primary-hover;
        }
        &:active {
            background-color: $color-blue-active;
            border: none;
        }
    }
</style>