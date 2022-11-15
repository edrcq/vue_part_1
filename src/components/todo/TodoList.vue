<template>
    <div>
        <h1>{{ todoList.name }} {{ statTodo }}</h1>
        <form @submit.prevent="todoList.add(newTodo)">
            Qu'avez-vous à faire ?<br />
            <input v-model="newTodo" type="text" class="bg-slate-200">
            <button type="submit">Ajouter</button>
        </form>

        <TodoListItem
            v-for="(item, i) in todoList.todos"
            v-bind="item"
            @action:done="todoList.done(i)"
            @action:delete="todoList.delete(i)"
            @action:edit="todoList.edit(i, $event)"
            :key="i"
        />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
import { useTodolist } from '../../composables/todolist';
import { TodoList } from '../../models/TodoList';
import useTodoStore from '../../store/todo.store';
import TodoListItem from './TodoListItem.vue'

export default defineComponent({
    components: {
        TodoListItem,
    },
    // props: {
    //     todolist: {
    //         type: Object as PropType<TodoList>
    //     }
    // },
    setup() {
        // const todolistUtils = useTodolist()
        const todoStore = useTodoStore()
        const route = useRoute()
        const todoListIndex = computed(() => parseInt(typeof route.params.id === 'string' ? route.params.id : '0'))
        const todoList = computed<TodoList>(() => todoStore.board[todoListIndex.value])

        const alreadyDone = computed(() => {
            return todoList.value.todos.filter(t => t.done).length
        })
        const statTodo = computed(() => {
            return `${alreadyDone.value}/${todoList.value.todos.length}`
        })

        const newTodo = ref('')

        return {
            todoList,
            statTodo,
            newTodo,
        }
    }
})
</script>

<style scoped>

</style>
