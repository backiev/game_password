import { defineStore } from 'pinia';
import { tasks } from '@/data/tasks/tasks';
import { ITask } from '@/types/tasks';


interface PasswordState {
    password: string
    tasks: ITask[]
}

export const usePasswordStore = defineStore({
    id: 'password',
    state: (): PasswordState => ({
        password: JSON.parse(localStorage.getItem('password') as string),
        tasks: JSON.parse(localStorage.getItem('tasks') as string) ? JSON.parse(localStorage.getItem('tasks') as string) : [tasks[0]]
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
                nullTasks[0].status = 'active';
            }
        },
        // Проверяем статусы у активных тасков
        checkTasks() {
            this.tasks.map(task => {
                task.status = task.checkSuccess(this.password);
            })
            // проверка на выполненные задания
            if (this.tasks.length !== tasks.length) this.checkNewTask();

            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        // Обновляем текстовое поле пароля
        updatePassword(value: string) {
            this.password = value;
            localStorage.setItem('password', JSON.stringify(this.password))
        },
    },
});