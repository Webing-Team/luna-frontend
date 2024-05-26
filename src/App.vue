<script setup>
import Sidebar from './components/Sidebar.vue';
import MainHeader from "./components/MainHeader.vue";
</script>

<template>
  <div class="fixed flex w-full">
    <Sidebar />
    <MainHeader />
  </div>
  <router-view />

</template>

<style scoped></style>
