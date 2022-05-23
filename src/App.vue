<template>
  <div id="app">
    <HeaderApp />
    <router-view/>
  </div>
</template>
<script>
import HeaderApp from '@/stories/components/Header/HeaderApp.vue'

export default {
  components: {
    HeaderApp
  }
}
</script>

<style lang="scss">
.container{
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
