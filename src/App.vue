<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <div class="dummy-div"></div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/shared/Header.vue';
  import Footer from './components/shared/Footer.vue';

  export default {
    name: 'app',
    components: {
      Footer,
      Header,
    },
  };
</script>

<style lang="scss">
  #app {
    min-height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
  }
  .dummy-div {
    flex-grow: 1;
  }
</style>
