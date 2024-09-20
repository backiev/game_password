export interface ITask {
    id: number
    text: string
    status: string | null
    checkSuccess: (value: string) => string
}