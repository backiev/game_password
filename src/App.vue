<script setup lang="ts">
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Game from './components/Game.vue'
    import {ModalsContainer, useModal} from 'vue-final-modal'
    import ModalInfo from '@/components/ModalInfo.vue'
    import {randomEmote} from './data/emotes/emotesHi'
    import {IAttrsModal} from './types/modal'
    import {useThemeStore} from '@/store/theme.store'
    import useEventsBus from '@/eventBus'
    import {nextTick, ref, watch} from 'vue'
    import ConfettiExplosion from 'vue-confetti-explosion'

    const {open, close} = useModal({
        component: ModalInfo,
        attrs: {
            title: 'Приветствие',
            text: 'Приветствую в данной игре! Начни вводить свой новый пароль в текстовое поле на главном экране!',
            textButton: 'Начать',
            emoteUrl: randomEmote.url,
            onConfirm() {
                close()
            },
            onClosed() {
                localStorage.setItem('started_game', JSON.stringify(Date.now()))
            },
        } as IAttrsModal,
    })
    const started_game = JSON.parse(localStorage.getItem('started_game') as string)
    const themeStore = useThemeStore()
    const {bus} = useEventsBus()
    const visible = ref(false)

    const explode = async () => {
        visible.value = false
        await nextTick()
        visible.value = true
    }

    if (!started_game) {
        open()
    }

    watch(
        () => bus.value.get('doneTask'),
        () => {
            // const [doneTask] = val ?? []
            explode()
        },
    )
</script>

<template>
    <div class="wrapper">
        <Header />

        <main class="main" :class="{white: themeStore.theme}">
            <Game />
            <div class="main-confetti-left">
                <ConfettiExplosion v-if="visible" :particleCount="100" />
            </div>
            <div class="main-confetti-right">
                <ConfettiExplosion v-if="visible" :particleCount="100" />
            </div>
        </main>
        <Footer />
    </div>
    <ModalsContainer />
</template>

<style lang="scss">
    .main {
        flex-grow: 1;
        position: relative;
        overflow: hidden;
        &-confetti-left,
        &-confetti-right {
            position: absolute;
            top: 0;
        }
        &-confetti-left {
            left: 0;
        }
        &-confetti-right {
            right: 0;
        }
    }
</style>
