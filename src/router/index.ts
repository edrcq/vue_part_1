import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { todoListBeforeEnter } from "./todolist";

const routes: RouteRecordRaw[] = [
    {
        name: 'Login',
        path: '/',
        component: () => import('../components/pages/LoginPage.vue')
    },
    {
        name: 'Board',
        path: '/board',
        component: () => import('../components/pages/BoardPage.vue'),
        meta: {
            auth: true,
        }
    },
    {
        name: 'Todo',
        path: '/todos/:id',
        component: () => import('../components/pages/TodoPage.vue'),
        meta: {
            auth: true,
        },
        beforeEnter: todoListBeforeEnter,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
