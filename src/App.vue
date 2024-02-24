<template>
  
  <Layout msg="Welcome to Your Vue.js App"/>
</template>

<script>

import Layout from './components/Layout.vue'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>
