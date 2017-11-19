<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {}
        },
        created () {
            if(localStorage.getItem('token'))
                window.loggedIn = true;
            else
                window.loggedIn = false;
        }
    }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>