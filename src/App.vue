<template>
  <div id="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';;

export default {
  name: 'App',
  components: {
    Sidebar,
  }
};
</script>

<style>
#app {
  font-family: 'Isamiri', sans-serif;
  display: flex;
}
</style>

