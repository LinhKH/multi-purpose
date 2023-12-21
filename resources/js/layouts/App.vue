<template>
	<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
		<router-link class="navbar-brand" :to="{ name: 'Home' }">Home</router-link>
		<ul class="navbar-nav">
			<li class="nav-item">
				<router-link v-if="$store.getters.getToken == 0" class="text-white" :to="{ name: 'Login' }">Login</router-link>
			</li>
			<li class="nav-item">
				<router-link v-if="$store.getters.getToken == 0" class="text-white ml-2" :to="{ name: 'Register' }">Register</router-link>
			</li>
			<li class="nav-item">
				<router-link v-if="$store.getters.getToken != 0" class="text-white ml-2" :to="{ name: 'Dashboard' }">Dashboard</router-link>
			</li>
			<li class="nav-item">
                <a v-if="$store.getters.getToken != 0" type="button" class="ml-2 text-white" @click="logout">Logout</a>
			</li>
		</ul>
	</nav>
    
	<router-view></router-view>
</template>
<script setup>
import { useRouter } from 'vue-router';
import store from '../store';

const router = useRouter();
    const logout = () => {
        store.dispatch('removeToken')
        router.push({name: 'Home'});
    };
</script>



