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

    const store = usePasswordStore()
    const {open, close} = useModal({
        component: ModalInfo,
        attrs: {
            title: 'Завершение',
            text: `Поздравляю! Вы завершили игру! Ваше итоговое время: ${new Date(
                Date.now() - parseInt(JSON.parse(localStorage.getItem('started_game') as string)) > 0
                    ? Date.now() - parseInt(JSON.parse(localStorage.getItem('started_game') as string))
                    : 0,
            ).getMinutes()} минут. Ваш финальный пароль: ${store.password}`,
            textButton: 'Закрыть',
            emoteUrl: randomEmote.url,
            onConfirm() {
                close()
                localStorage.setItem('finished_game', JSON.stringify(Date.now()))
            },
        } as IAttrsModal,
    })
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
    const handleRestartGame = () => {
        store.newGame()
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
                        <base-button class="block-button" @clickHandle="checkPasswordHandle">Проверить</base-button>
                        <!-- <button class="button block-button" @click="checkPasswordHandle">Проверить</button> -->
                    </div>
                </div>
                <base-button
                    @clickHandle="handleRestartGame"
                    class="block-button button-restart"
                    v-if="finishedPassword"
                    >Сыграть заново</base-button
                >
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
    .button-restart {
        margin-top: 10px;
        width: 100%;
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
