<script lang='ts' setup>
    import baseClose from '@/ui/base-close.vue';
    import baseButton from '@/ui/base-button.vue';
    import { VueFinalModal } from 'vue-final-modal'
    // import { onMounted } from 'vue';
    // import emotesInstance from '@/api/emotes.api';

    const props = defineProps({
        title: String,
        emoteUrl: String,
        onConfirm: Function
    })
    
    
    // onMounted(async () => {
    //     try {
    //         const response = await emotesInstance.get('/emotes/651f41909ab03705595792d1')
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // })
    const emit = defineEmits<{
    (e: 'confirm'): void
  }>()
</script>

<template>
    <!-- <div class="modal"> -->
        <VueFinalModal
            class="confirm-modal"
            content-class="confirm-modal-content"
            overlay-transition="vfm-fade"
            content-transition="vfm-fade"
        >
            <div class="modal-inner">
                <div class="modal-close">
                    <base-close></base-close>
                </div>
                <div class="modal-image">Картинка</div>
                <div class="modal-text">
                    Приветствую в данной игре! Начни вводить свой новый пароль в текстовое поле на главном экране!
                </div>
                <div class="modal-button">
                    <base-button text="Начать"></base-button>
                </div>
            </div>
        </VueFinalModal>
    <!-- </div> -->
    <!-- <div class="modal">
        <div class="modal-wrapper">
        </div>
        
    </div> -->
</template>

<style lang='scss'>
    .confirm-modal {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    // .confirm-modal-content {
    // }
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
    &-image {
        flex-grow: 1;
    }
    &-close, &-button {
        display: flex;
        justify-content: flex-end;
    }
  }
    // .modal {
    //     position: absolute;
    //     width: 100vw;
    //     height: 100vh;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     &-wrapper {
    //         position: absolute;
    //         width: 100%;
    //         height: 100%;
    //         background-color: #333;
    //         opacity: .3;
    //         top: 0;
    //         left: 0;
    //         right: 0;
    //         bottom: 0;
    //     }
        
    //     // &-button {
    //     //     margin-top: 10px;
    //     // }
    // }
</style>