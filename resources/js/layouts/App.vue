<template>
	<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
		<router-link class="navbar-brand" :to="{ name: 'Home' }">Home</router-link>
		<ul class="navbar-nav">
			<li class="nav-item">
				<router-link class="text-white" :to="{ name: 'Login' }" v-if="store.token == 0">Login</router-link>
			</li>
			<li class="nav-item">
				<router-link class="text-white ml-2" :to="{ name: 'Register' }" v-if="store.token == 0">Register</router-link>
			</li>
			<li class="nav-item">
				<router-link class="text-white ml-2" :to="{ name: 'Dashboard' }" v-if="store.token != 0">Dashboard</router-link>
			</li>
		</ul>
	</nav>
    
	<router-view></router-view>
</template>
<script setup>
import { computed } from "vue";
import { useUserStore } from "../store/userStore";

const store = useUserStore();

</script>


