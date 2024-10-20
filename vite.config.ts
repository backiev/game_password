import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// import {fileURLToPath, URL} from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '/game_password/',
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/styles/main.scss";`,
            },
        },
    },
    resolve: {
        alias: [{find: '@', replacement: resolve(__dirname, 'src')}],
    },
})
