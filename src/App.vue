<template>
  <div id="app">
    <router-link to="/companies">Companies</router-link>&nbsp; | 
    <router-link to="/bar">Outstanding</router-link>&nbsp; | 
    <router-link to="/home">Trending</router-link>&nbsp; | 
    <router-link to="/bar">Favorites</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
