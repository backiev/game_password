<script lang="ts" setup>
    import baseClose from '@/ui/base-close.vue'
    import baseButton from '@/ui/base-button.vue'
    import {VueFinalModal} from 'vue-final-modal'
    // import { onMounted } from 'vue';
    // import emotesInstance from '@/api/emotes.api';

    const props = defineProps({
        title: String,
        text: String,
        textButton: String,
        emoteUrl: String,
        onConfirm: Function,
    })

    const emit = defineEmits<{
        (e: 'confirm'): void
    }>()
</script>

<template>
    <VueFinalModal
        class="confirm-modal"
        content-class="confirm-modal-content"
        overlay-transition="vfm-fade"
        content-transition="vfm-fade">
        <div class="modal-inner">
            <div class="modal-close">
                <div class="modal-close__title" v-if="title">{{ title }}</div>
                <base-close @click="emit('confirm')"></base-close>
            </div>
            <div class="modal-image" v-if="emoteUrl" :style="{backgroundImage: `url('${emoteUrl}')`}"></div>
            <div class="modal-text" v-if="text">
                {{ text }}
            </div>
            <div class="modal-button">
                <base-button @click="emit('confirm')">{{ textButton }}</base-button>
            </div>
        </div>
    </VueFinalModal>
</template>

<style lang="scss">
    .confirm-modal {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        &-inner {
            max-width: 400px;
            width: 100%;
            min-height: 50vh;
            border-radius: 8px;
            background-color: $color-white;
            color: $color-black;
            z-index: 10;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 20px;
        }
        &-text {
            margin-top: 10px;
        }
        &-image {
            flex-grow: 1;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            margin-top: 10px;
        }
        &-button {
            display: flex;
            justify-content: flex-end;
        }
        &-close {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &__title {
                font-size: 15px;
                font-weight: bolder;
            }
        }
    }
</style>
