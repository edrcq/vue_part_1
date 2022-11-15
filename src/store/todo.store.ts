import { defineStore } from 'pinia'
import { TodoList } from '../models/TodoList';

interface TodoStoreState {
    board: TodoList[]
}

const useTodoStore = defineStore('todo', {
    state: (): TodoStoreState => ({
        board: []
    }),
    actions: {
        createList(name: string) {
            this.board.push(new TodoList({ name }))
        },
        removeList(index: number) {
            this.board.splice(index, 1)
        },
    }
});

export default useTodoStore
