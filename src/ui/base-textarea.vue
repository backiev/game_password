<script setup lang="ts">
    import {ref} from 'vue'

    const props = defineProps({
        modelValue: {
            type: String,
            required: true,
        },
        class: String,
    })

    const emit = defineEmits(['update'])
    // const password = ref(props.modelValue ? props.modelValue : '');

    const handleUpdate = (event: Event) => {
        const value = (event.target as HTMLTextAreaElement).value
        emit('update', value)
    }
</script>

<template>
    <textarea
        class="textarea"
        :class="props.class"
        cols="30"
        rows="3"
        placeholder="Пароль"
        :value="modelValue"
        @input="handleUpdate"></textarea>
</template>

<style lang="scss" scoped>
    .textarea {
        background-color: $color-white;
        color: $color-black;
        border-radius: 4px;
        border: $color-textarea-body;
        resize: none;
        outline: none;
        padding: 4px 8px;
    }
</style>
