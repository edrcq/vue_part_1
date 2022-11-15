import { ITodoItem } from "./TodoItem"

export interface ITodoList {
    name: string
    todos?: ITodoItem[]
}
