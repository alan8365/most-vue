<template>
  <div class="container-sm">
    <most-header />

    <most-main />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import MostHeader from './stories/Header';
import MostMain from './stories/Main';

export default {
  name: 'App',
  components: {
    MostHeader,
    MostMain,
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
