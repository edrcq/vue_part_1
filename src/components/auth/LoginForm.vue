<template>
    <form @submit.prevent="tryLogin" v-if="!loggingIn">
        Email: <input type="email" v-model="login.email" /><br />
        Password: <input type="password" v-model="login.password" /><br />
        <button type="submit">Login now</button>
    </form>
    <LoaderPacman v-else />
</template>

<script setup lang="ts">
import LoaderPacman from '../utils/LoaderPacman.vue'
import { reactive, watch, computed } from 'vue';
import useAuthStore from '../../store/auth.store'
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const loggingIn = computed(() => authStore.loggingIn);

const router = useRouter()

const login = reactive({
    email: '',
    password: ''
})

const tryLogin = () => {
    // call api with email & password
    console.log('tryLogin', login.email)
    authStore.login(login.email, login.password)
        .then(() => router.push('/todos'))
}

watch(loggingIn, (nv, ov) => {
    console.log('loggingIn', nv, ov)
})
</script>
