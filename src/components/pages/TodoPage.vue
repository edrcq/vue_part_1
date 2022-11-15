<template>
    <UserLayout v-if="show">
        <TodoList  />
    </UserLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useTodoStore from '../../store/todo.store';
import UserLayout from '../layouts/UserLayout.vue';
import TodoList from '../todo/TodoList.vue';

const todoStore = useTodoStore();
const route = useRoute()
const router = useRouter()

const show = ref(false)

if (typeof route.params.id === 'string') {
    const index = parseInt(route.params.id)
    if (isNaN(index) || !todoStore.board[index]) {
        router.push('/board')
    } else {
        show.value = true;
    }
} else {
    router.push('/board')
}
</script>

<style scoped>

</style>
