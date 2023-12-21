import { createRouter, createWebHistory } from "vue-router";
import Login from './pages/Login.vue';
import Home from './pages/Home.vue';
import Register from './pages/Register.vue';
import Dashboard from './pages/Dashboard.vue';

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
            requireAuth : true
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to,from) => {
    if (to.meta.requireAuth && !localStorage.getItem('token')) {
        return { name: 'Login' };
    }
    if (!to.meta.requireAuth && localStorage.getItem('token')) {
        return { name: 'Dashboard' };
    }
})

export default router
