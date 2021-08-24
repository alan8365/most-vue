<template>
  <div class="container">
    <Header />

    <Main />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import Header from './stories/Header.vue';
import Main from './stories/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
