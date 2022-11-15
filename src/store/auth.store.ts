import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', {
    state: () => ({
        email: '',
        loggingIn: false
    }),
    actions: {
        login(email: string, password: string): Promise<boolean> {
            return new Promise((resolve) => {
                this.loggingIn = true;
                setTimeout(() => {
                    this.email = email;
                    this.loggingIn = false;
                    localStorage.setItem('email', email)
                    resolve(true)
                }, 1000)
            })
        }
    }
})

export default useAuthStore;
