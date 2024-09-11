<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
})

const emit = defineEmits(['update'])
// const password = ref(props.modelValue ? props.modelValue : '');

const handleUpdate = (event: Event) => {
    const value = (event.target as HTMLTextAreaElement).value;
    emit('update', value);
}
</script>

<template>
    <textarea 
        class="textarea" 
        cols="30" 
        rows="3" 
        placeholder="Пароль"
        :value="modelValue"
        @input="handleUpdate"
    ></textarea>
</template>


<style lang="scss" scoped>
    
    .textarea {
        background-color: white;
        color: black;
        border-radius: 4px;
        resize: none;
        outline: none;
        padding: 4px 8px;
    }
    
</style>