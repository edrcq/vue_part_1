import useAuthStore from "../store/auth.store";

export function autoLogin() {
    const authStore = useAuthStore()

    const email = localStorage.getItem('email')
    console.log(email, 'auto login')
    if (email && email !== '') {
        authStore.email = email;
    }
}
