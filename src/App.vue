<script setup>
import Sidebar from './components/Sidebar.vue';
import MainHeader from "./components/MainHeader.vue";
import {useRoute} from "vue-router";
import {computed} from "vue";
import {useNotifications} from "./store/useNotifications.js";

const route = useRoute();

const isLogin = computed(() => {
  return route.path === '/login' || route.path === '/signUp' || route.path === '/forgotPassword';
})
</script>

<template>
 <div v-if="!isLogin">
   <div class="fixed flex w-full">
     <Sidebar />
     <MainHeader />
   </div>
   <router-view />
 </div>
 <div v-else>
   <router-view />
 </div>
</template>

<style scoped>


</style>
