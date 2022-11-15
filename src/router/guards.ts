import router from "./index";
import useAuthStore from '../store/auth.store'

router.beforeEach((to, from, next) => {
    console.log('before each')

    const authStore = useAuthStore()
    // we are logged in
    if (authStore.email !== '' && to.meta.auth) {
        return next();
    }
    if (authStore.email === '' && to.meta.auth) {
        return next('/');
    }
    
    next()
})
