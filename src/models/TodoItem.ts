import { ITodoItem } from "../interfaces/TodoItem";

export class TodoItem implements ITodoItem {
    // Methode 1 : full verbose
    text: string;
    done: boolean;
    createdAt: Date;

    // constructor(todo: ITodoItem) {
    //     this.text = todo.text
    //     this.done = todo.done
    //     this.createdAt = todo.createdAt
    // }

    // Methode 2:  magique sans objet
    // constructor(
    //     public text: string,
    //     public done: boolean,
    //     public createdAt: Date
    // ) {}

    constructor(text: string, done: boolean) {
        this.text = text
        this.done = done
        this.createdAt = new Date()
    }
}
