import { ITask } from '@/types/tasks';

export const tasks: ITask[] = [
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
        text: 'Пароль НЕ должен содержать пробелы',
        status: null,
        checkSuccess(value: string) {
            const valueGood = value.replace(/\s/g, '');
            if (value === valueGood) return 'done'
            return 'fail'
        }
    },
    {
        id: 2,
        text: 'Пароль должен содержать цифры',
        status: null,
        checkSuccess(value: string) {
            if (/[0-9]+/.test(value)) return 'done'
            return 'fail'
        }
    },
    {
        id: 3,
        text: 'Пароль должен содержать ЗАГЛАВНЫЕ симболы',
        status: null,
        checkSuccess(value: string) {
            if (value !== value.toLowerCase()) return 'done'
            return 'fail'
        }
    },
    {
        id: 4,
        text: 'Пароль НЕ должен содержать пробелы',
        status: null,
        checkSuccess(value: string) {
            const valueGood = value.replace(/\s/g, '');
            if (value === valueGood) return 'done'
            return 'fail'
        }
    },
    
]