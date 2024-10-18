<script setup lang="ts">
    import {useThemeStore} from '@/store/theme.store'
    import {usePasswordStore} from '@/store/password.store'
    import {computed} from 'vue'

    const themeStore = useThemeStore()
    const store = usePasswordStore()
    // const tasks = store.tasks
    const progressTasks = computed(() => store.progressTasks)
    // console.log(progressTasks)

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
        <div class="header-progress" :style="{transform: `scaleX(${progressTasks})`}">
            <div class="header-progress-wrapper">
                <div class="header-wave header-wave-1"></div>
                <div class="header-wave header-wave-2"></div>
                <div class="header-wave header-wave-3"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .header-progress {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transform: scaleX(0);
        transform-origin: left;
        opacity: 0.3;
        background-color: #e0f7fa;
        transition: transform $transition-header ease-in-out;
        &-wrapper {
            position: relative;
            height: 100%;
            width: 100%;
        }
    }

    .header-wave {
        position: absolute;
        left: calc(100% - 100px);
        bottom: -20px;
        background: #e0f7fa;
        border-radius: 50%;
        animation: wave-animation $transitions-wave infinite linear;
    }

    .header-wave-1 {
        animation-delay: 0s;
        height: 100%;
        width: 130px;
        opacity: 0.5;
    }

    .header-wave-2 {
        animation-delay: 1.5s;
        height: 100%;
        width: 120px;
    }

    .header-wave-3 {
        animation-delay: 2.5s;
        height: 100%;
        width: 140px;
        opacity: 0.25;
    }

    @keyframes wave-animation {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-50%);
        }
        100% {
            transform: translateY(0);
        }
    }
    .header {
        min-height: 10vh;
        display: flex;
        align-items: center;
        font-size: 24px;
        background-color: $color-blue-light;
        position: relative;
        overflow: hidden;
        z-index: 5;
        &-wrapper {
            max-width: 480px;
            width: 100%;
            margin: 0 auto;
            display: flex;
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
