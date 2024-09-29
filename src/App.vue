<script setup lang="ts">
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Game from './components/Game.vue'
    import {ModalsContainer, useModal} from 'vue-final-modal'
    import ModalInfo from '@/components/ModalInfo.vue'
    import {randomEmote} from './data/emotes/emotesHi'
    import {IAttrsModal} from './types/modal'
    import {useThemeStore} from '@/store/theme.store'

    const {open, close} = useModal({
        component: ModalInfo,
        attrs: {
            title: 'Hello World!',
            onConfirm() {
                close()
                localStorage.setItem('started_game', JSON.stringify(new Date().getTime()))
            },
            emoteUrl: randomEmote.url,
        } as IAttrsModal,
    })
    const started_game = JSON.parse(localStorage.getItem('started_game') as string)
    const themeStore = useThemeStore()
    // console.log(theme)

    if (!started_game) {
        open()
    }
</script>

<template>
    <div class="wrapper">
        <Header />
        <main class="main" :class="{white: themeStore.theme}">
            <Game />
        </main>
        <Footer />
    </div>
    <ModalsContainer />
</template>

<style lang="scss">
    .main {
        flex-grow: 1;
    }
</style>
