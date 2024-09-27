<script lang='ts' setup>
const props = defineProps({
    text: String,
    class: String,
})

const emit = defineEmits(['clickHandle'])
</script>

<template>
    <button class="button" @click="emit('clickHandle')">{{ text ? text : 'Закрыть' }}</button>
</template>

<style lang='scss' scoped>
    .button {
        // border: 1px solid $color-black;
        border-radius: 4px;
        padding: 10px 20px;
        background-color: $color-blue-light;
        color: $color-white;
        transition: background-color .2s ease-in-out;
        &:hover {
            background-color: #C3B1E1;
            // background-color: $color-primary-hover;
        }
        &:active {
            background-color: #CCCCFF;
            // background-color: $color-blue-active;
            border: none;
        }
    }
</style>