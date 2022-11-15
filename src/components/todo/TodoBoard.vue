<template>
    <form @submit.prevent="createList">
        Name: <input type="text" v-model="listName">
    </form>
    <div class="">
        <TodoBoardItem
            v-for="(item, i) in board"
            v-bind="item"
            :index="i"
            :key="`bi${i}`"
            @action:delete="removeList(i)"
        />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import useTodoStore from '../../store/todo.store';
import TodoBoardItem from './TodoBoardItem.vue';

export default defineComponent({
    setup() {
        const todoStore = useTodoStore();
        const board = computed(() => todoStore.board)

        const listName = ref('')
        const createList = () => todoStore.createList(listName.value)

        return {
            createList,
            removeList: todoStore.removeList,
            listName,
            board,
        };
    },
    components: { TodoBoardItem }
})
</script>

<style scoped>

</style>
