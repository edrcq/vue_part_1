<template>
    <component :is="pageComponent"></component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import LoginPage from '../pages/LoginPage.vue';
import TodoPage from '../pages/TodoPage.vue';

const props = defineProps<{ page: string }>()

const pageComponent = computed(() => {
    switch(props.page) {
        case "todo":
            return TodoPage
        case "login":
            return LoginPage
        default:
            return LoginPage
    }
})
</script>

<style scoped>

</style>
