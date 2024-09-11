import { defineStore } from 'pinia';
import { tasks } from '@/data/tasks/tasks';

interface ITask {
    id: number
    text: string
    status: string | null
    checkSuccess: (value: string) => string
} 
interface PasswordState {
    password: string
    tasks: ITask[]
}

export const usePasswordStore = defineStore({
    id: 'password',
    state: (): PasswordState => ({
        password: '',
        tasks: [tasks[0]]
    }),
    actions: {
        // Проверяем, добавлять нам новую таску или нет
        checkNewTask() {
            const activeTasks = this.tasks.filter((task) => task.status === 'active');
            const failTasks = this.tasks.filter((task) => task.status === 'fail');
            if (activeTasks.length === 0 && failTasks.length === 0) {
                const nullTasks = tasks.filter((task) => task.status === null);
                const newTask = {id: nullTasks[0].id, text: nullTasks[0].text, status: 'active', checkSuccess: nullTasks[0].checkSuccess};
                this.tasks.unshift(newTask);
            }
        },
        // Проверяем статусы у активных тасков
        checkTasks() {
            this.tasks.map(task => {
                task.status = task.checkSuccess(this.password);
            })
            this.checkNewTask();
        },
        // Обновляем текстовое поле пароля
        updatePassword(value: string) {
            this.password = value;
        },
    },
});