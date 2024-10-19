<script lang="ts" setup>
    const props = defineProps({
        text: String,
        status: String || null,
    })
</script>

<template>
    <div
        class="task"
        v-if="status !== null"
        v-html="props.text"
        :class="{fail: props.status === 'fail', done: props.status === 'done'}"></div>
</template>

<style lang="scss" scoped>
    .task {
        padding: 8px;
        min-height: 40px;
        background-color: $color-brown-light;
        color: $color-white;
        &.fail {
            background-color: $color-fail;
        }
        &.done {
            background-color: $color-done;
        }
    }
</style>
