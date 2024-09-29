import {defineStore} from 'pinia'

export const useThemeStore = defineStore({
    id: 'theme',
    state: () => ({
        theme: JSON.parse(localStorage.getItem('theme') as string)
            ? JSON.parse(localStorage.getItem('theme') as string)
            : false,
    }),
    actions: {
        changeTheme() {
            this.theme = !this.theme
            localStorage.setItem('theme', JSON.stringify(this.theme))
        },
    },
})
