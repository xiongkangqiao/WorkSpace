<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { mapState } from "vuex";

export default {
  name: 'App',
  watch: {
    '$route': function(to,from){
      let top = document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset;
      this.$store.commit('increment',top);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      //console.log(this.$store.state.top)
    }
  },
}
</script>

<style>
#app {
}
</style>
