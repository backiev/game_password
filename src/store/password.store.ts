import { defineStore } from 'pinia';

interface PasswordState {
    password: string;
}

export const usePasswordStore = defineStore({
    id: 'password',
    state: (): PasswordState => ({
        password: '',
    }),
    actions: {
        updatePassword(value: string) {
            this.password = value;
        },
    },
});