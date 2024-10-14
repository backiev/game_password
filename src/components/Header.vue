<script setup lang="ts">
    import {useThemeStore} from '@/store/theme.store'

    const themeStore = useThemeStore()

    const handleClickTheme = () => {
        themeStore.changeTheme()
    }
</script>

<template>
    <div class="header">
        <div class="header-wrapper">
            <div class="header-logo">Неопознанный пароль</div>
            <div class="header-theme-wrapper">
                <div class="header-theme" :class="{white: themeStore.theme}" @click="handleClickTheme"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .header {
        min-height: 10vh;
        display: flex;
        align-items: center;
        font-size: 24px;
        background-color: $color-blue-light;
        &-wrapper {
            max-width: 480px;
            width: 100%;
            margin: 0 auto;
            display: flex;
            // justify-content: space-between;
            align-items: center;
        }
        &-logo {
            flex-grow: 1;
            text-align: center;
        }
        &-theme {
            background-image: url('../assets/moon.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 25px;
            height: 25px;
            cursor: pointer;
            transition: background-image $transition-theme-time ease-in-out;
            &-wrapper {
                transition: border $transition-theme-time ease-in-out;
                padding: 1px;
                border: 2px solid $color-white;
                border-radius: 4px;
                &:hover {
                    border: 2px solid $color-button-hover;
                }
            }
            &.white {
                background-image: url('../assets/sun.svg');
            }
            &:hover {
                background-image: url('../assets/moon-light.svg');
                &.white {
                    background-image: url('../assets/sun-light.svg');
                }
            }
        }
    }
</style>
