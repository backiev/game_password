export const tasks = [
    {
        id: 0,
        text: 'Пароль должен содержать, как минимум 6 симболов',
        status: 'active',
        checkSuccess(value: string) {
            if (value.length >= 6) return 'done'
            return 'fail'
        }
    },
    {
        id: 1,
        text: 'Пароль должен содержать цифры',
        status: null,
        checkSuccess(value: string) {
            // if (value.length >= 6) return 'done'
            return 'fail'
        }
    }
]