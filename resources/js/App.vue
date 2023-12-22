<script setup>
import { ref, onMounted, computed, onUpdated } from 'vue';
import AppNavbar from './components/AppNavbar.vue';
import SidebarLeft from './components/SidebarLeft.vue';
import SidebarRight from './components/SidebarRight.vue';
import AppFooter from './components/AppFooter.vue';
import { useAuthUserStore } from './stores/AuthUserStore';
import { useSettingStore } from './stores/SettingStore';

const authUserStore = useAuthUserStore();
const settingStore = useSettingStore();

const currentThemeMode = computed(() => {
    return settingStore.theme === 'dark' ? 'dark-mode' : '';
});

onUpdated(() => {
    const toggleMenuIcon = document.getElementById('toggleMenuIcon');
    const body = document.querySelector('body');
    toggleMenuIcon.addEventListener('click', () => {
        if (body.classList.contains('sidebar-collapse')) {
            localStorage.setItem('sidebarState', 'expanded');
        } else {
            localStorage.setItem('sidebarState', 'collapsed');
        }
    });

    const sidebarState = localStorage.getItem('sidebarState');
    if (sidebarState === 'collapsed') {
        body.classList.add('sidebar-collapse');
    }
});
</script>

<template>
    <div v-if="authUserStore.user.name !== ''" class="wrapper" :class="currentThemeMode">
        <AppNavbar />
        <SidebarLeft/>
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
        <SidebarRight />
        <AppFooter />
</div>
<div v-else class="login-page" :class="currentThemeMode">
    <router-view></router-view>
</div>
</template>
