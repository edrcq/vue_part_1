import { ITodoList } from "../interfaces/TodoList"
import { TodoItem } from "./TodoItem"

export class TodoList implements ITodoList {
    name: string
    todos: TodoItem[]

    constructor(options: ITodoList) {
        this.name = options.name
        this.todos = options.todos || []
    }

    add(text) {
        this.todos.push(new TodoItem(text, false))
    }

    delete(index: number) {
        this.todos.splice(index, 1)
    }

    edit(index: number, text: string) {
        this.todos[index].text = text
    }

    done(index: number) {
        this.todos[index].done = !this.todos[index].done
    }
}
