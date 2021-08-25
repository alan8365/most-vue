<template>
  <!-- <most-news /> -->
  <most-agenda />
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
// import MostNews from './stories/News.vue';
import MostAgenda from './stories/Agenda.vue';

export default {
  name: 'App',
  components: {
    // MostNews,
    MostAgenda,
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
