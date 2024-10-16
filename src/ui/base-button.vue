<script lang="ts" setup>
    const props = defineProps({
        text: String,
        class: String,
    })

    const emit = defineEmits(['clickHandle'])
</script>

<template>
    <button :class="class" class="button" @click="emit('clickHandle')">
        <slot> Закрыть </slot>
    </button>
</template>

<style lang="scss" scoped>
    .button {
        // border: 1px solid $color-black;
        border-radius: 4px;
        padding: 10px 20px;
        background-color: $color-blue-light;
        color: $color-white;
        transition: background-color 0.2s ease-in-out;
        &:hover {
            background-color: $color-button-hover;
            // background-color: $color-primary-hover;
        }
        &:active {
            background-color: $color-button-active;
            // background-color: $color-blue-active;
            border: none;
        }
    }
</style>
