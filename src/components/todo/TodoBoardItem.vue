<template>
    <div>
        <button @click="$emit('action:delete')">Delete List</button>
        <RouterLink :to="`/todos/${index}`">Voir</RouterLink>
        <h3 class="text-lg">{{ name }}</h3>
        <ul>
            <li v-for="i in nbShow">{{ todos[i].text }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { TodoItem } from '../../models/TodoItem';

defineEmits(['action:delete'])

interface BoardItemProps {
    name: string
    todos: TodoItem[]
    index: number
}
const props = defineProps<BoardItemProps>()

const nbShow = props.todos.length <= 3 ? props.todos.length : 3
</script>

<style scoped>

</style>
