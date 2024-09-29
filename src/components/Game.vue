<script setup lang="ts">
    import baseTextarea from '../ui/base-textarea.vue'
    import Tasks from '../components/Tasks.vue'
    import baseButton from '@/ui/base-button.vue'
    import {usePasswordStore} from '@/store/password.store'

    const store = usePasswordStore()
    const updateHandle = (value: string) => {
        store.updatePassword(value)
    }
    const checkPasswordHandle = () => {
        store.checkTasks()
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
