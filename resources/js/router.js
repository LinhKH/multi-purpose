import { createRouter, createWebHistory } from "vue-router";
import Login from './pages/Login.vue';
import Home from './pages/Home.vue';
import Register from './pages/Register.vue';
import Dashboard from './pages/Dashboard.vue';
import { useUserStore } from "./store/userStore";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requireAuth: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from) => {
    const store = useUserStore()
    if (to.meta.requireAuth && !store.token) {
        return { name: 'Login' };
    }
    if (!to.meta.requireAuth && store.token) {
        return { name: 'Dashboard' };
    }
})

export default router
