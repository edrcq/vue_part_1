import { computed, ref, watch, watchEffect } from "vue"
import { ITodoItem } from "../interfaces/TodoItem"
import { TodoItem } from "../models/TodoItem"

export function useTodolist() {
    const todos = ref<ITodoItem[]>([])
    const newTodo = ref('')

    const alreadyDone = computed(() => {
        return todos.value.filter(t => t.done).length
    })
    const statTodo = computed(() => {
        return `${alreadyDone.value}/${todos.value.length}`
    })

    const addTodo = () => {
        todos.value.push(new TodoItem(newTodo.value, false))
        newTodo.value = ''
    }

    const todoDone = (index: number) => {
        todos.value[index].done = !todos.value[index].done
    }

    const deleteTodo = (index: number) => {
        console.log(index)
        todos.value.splice(index, 1)
    }

    const editTodo = (index: number, text: string) => {
        todos.value[index].text = text;
    }

    watch(statTodo, (newStat, oldStat) => {
        console.log({ newStat, oldStat })
    })

    watchEffect(() => {
        console.log(statTodo.value, newTodo.value)
    })

    return {
        todos,
        newTodo,
        addTodo,
        todoDone,
        deleteTodo,
        editTodo,
        statTodo
    }
}
