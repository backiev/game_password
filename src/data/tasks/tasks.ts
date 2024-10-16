import {ITask} from '@/types/tasks'
// контекстно.рф/?id=66edf5adcc172f07738e3f36
// https://tinyurl.com/3uyhu7ks
// перфоратор
const wordContext = 'перфоратор'
const linkContext = 'https://tinyurl.com/3uyhu7ks'
const summNumbers = 30

export const tasks: ITask[] = [
    {
        id: 0,
        text: 'Пароль должен содержать, как минимум 6 симболов',
        status: 'active',
        checkSuccess(value: string) {
            if (value.length >= 6) return 'done'
            return 'fail'
        },
    },
    {
        id: 1,
        text: 'Пароль НЕ должен содержать пробелы',
        status: null,
        checkSuccess(value: string) {
            const valueGood = value.replace(/\s/g, '')
            if (value === valueGood) return 'done'
            return 'fail'
        },
    },
    {
        id: 2,
        text: 'Пароль должен содержать цифры',
        status: null,
        checkSuccess(value: string) {
            if (/[0-9]+/.test(value)) return 'done'
            return 'fail'
        },
    },
    {
        id: 3,
        text: 'Пароль должен содержать ЗАГЛАВНЫЕ симболы',
        status: null,
        checkSuccess(value: string) {
            if (value !== value.toLowerCase()) return 'done'
            return 'fail'
        },
    },
    {
        id: 4,
        text: `Пароль должен содержать загаданное слово в <a class="link" target="_blank" href=${linkContext}>контекстно</a> (Если вы стример, просьба <span class="color-warning">не показывать ссылку</span>)`,
        status: null,
        checkSuccess(value: string) {
            if (value.includes(wordContext)) return 'done'
            return 'fail'
        },
    },
    {
        id: 5,
        text: 'В пароле не может стоять 11 симболов подряд',
        status: null,
        checkSuccess(value: string) {
            let number = 0
            for (let index = 0; index < value.length; index++) {
                if (!Number.isNaN(parseInt(value[index]))) {
                    number = 0
                } else {
                    number++
                }
                if (number >= 11) return 'fail'
            }
            return 'done'
        },
    },
    {
        id: 6,
        text: 'Сумма цифр должна быть меньше или равным 30',
        status: null,
        checkSuccess(value: string) {
            let numberCount = 0
            for (let index = 0; index < value.length; index++) {
                if (!Number.isNaN(parseInt(value[index]))) {
                    numberCount += parseInt(value[index])
                }
                if (numberCount > summNumbers) return 'fail'
            }
            return 'done'
        },
    },
]
