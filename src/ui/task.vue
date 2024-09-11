<script lang='ts' setup>

const props = defineProps({
    text: String,
    status: String || null,
})
// done, fail, active, null

</script>

<template>
    <div 
        class="task" 
        v-if="status !== null"
        :class="{fail: props.status === 'fail', done: props.status === 'done'}"
    >
        Задание: {{props.text}}
    </div>
</template>

<style lang='scss' scoped>
    .task {
        padding: 8px;
        min-height: 40px;
        background-color: $color-dark-grey;
        &.fail {
            background-color: $color-fail;
        }
        &.done {
            background-color: $color-done;
        }
    }
</style>