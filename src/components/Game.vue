<script setup lang="ts">
    import baseTextarea from '../ui/base-textarea.vue'
    import Tasks from '../components/Tasks.vue'
    import baseButton from '@/ui/base-button.vue'
    import {usePasswordStore} from '@/store/password.store'
    import {storeToRefs} from 'pinia'
    import {computed} from 'vue'
    import {useModal} from 'vue-final-modal'
    import {randomEmote} from '@/data/emotes/emotesBye'
    import ModalInfo from '@/components/ModalInfo.vue'
    import {IAttrsModal} from '@/types/modal'

    const {open, close} = useModal({
        component: ModalInfo,
        attrs: {
            title: 'Завершение',
            text: 'Поздравляю! Вы завершили игру',
            textButton: 'Закрыть',
            emoteUrl: randomEmote.url,
            onConfirm() {
                close()
                localStorage.setItem('finished_game', JSON.stringify(new Date().getTime()))
            },
        } as IAttrsModal,
    })
    const store = usePasswordStore()
    const {finishedPassword} = storeToRefs(store)
    const updateHandle = (value: string) => {
        store.updatePassword(value)
    }
    const checkPasswordHandle = () => {
        store.checkTasks()
        if (finishedPassword.value) {
            open()
        }
    }
</script>

<template>
    <div class="game">
        <div class="game-wrapper">
            <div class="game-block">
                <div class="game-input">
                    <div class="block">
                        <base-textarea
                            v-model="store.password"
                            @update="updateHandle"
                            class="block-textarea"></base-textarea>
                        <base-button
                            class="block-button"
                            text="Проверить"
                            @clickHandle="checkPasswordHandle"></base-button>
                        <!-- <button class="button block-button" @click="checkPasswordHandle">Проверить</button> -->
                    </div>
                </div>
                <tasks></tasks>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .block {
        display: flex;
        // align-items:flex-start;
        gap: 10px;
        &-textarea {
            flex-grow: 1;
        }
        @media screen and (max-width: $mobile) {
            flex-direction: column;
            &-button {
                padding: 10px 0;
            }
        }
    }

    .game {
        &-wrapper {
            // width: min-content;
            max-width: 500px;
            margin: 25px auto;
            padding: 10px;
        }
    }
</style>
