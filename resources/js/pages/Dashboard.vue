<template>
    <div class="container">
        <h2>Dashboard: </h2>
        <Dynamicform />



        <!-- <button type="button" class="btn btn-dark mt-2" @click="logout">Logout</button> -->
    </div>
</template>
<script setup>
// import { useRouter } from "vue-router";
// import store from '../store';

import Dynamicform  from '../components/Dynamicform.vue';

// const router = useRouter();

// const logout = () => {
//     store.dispatch('removeToken')
//     router.push({name: 'Home'});
// };
</script>