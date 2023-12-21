<template>
	<div class="container">
		<h2>Dashboard:</h2>
		<button type="button" class="btn btn-dark mt-2" @click="logout">
			Logout
		</button>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../store/userStore";

const router = useRouter();
const store = useUserStore();

const logout = () => {
	store.removeToken();
	router.push({ name: "Home" });
};
</script>