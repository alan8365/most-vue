<template>
  <!-- <most-news /> -->
  <!-- <most-agenda /> -->
  <!-- <most-meet-info /> -->
  <!-- <most-sign /> -->
  <!-- <most-upload /> -->
  <!-- <most-contact /> -->
  <div class="container">
    <most-header />

    <most-main />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
// import MostNews from './stories/News.vue';
// import MostAgenda from './stories/Agenda.vue';
// import MostMeetInfo from './stories/MeetInfo.vue';
// import MostSign from './stories/Sign.vue';
// import MostUpload from './stories/Upload.vue';
// import MostContact from './stories/Contact.vue';
import MostHeader from './stories/Header';
import MostMain from './stories/Main';

export default {
  name: 'App',
  components: {
    // MostNews,
    // MostAgenda,
    // MostMeetInfo,
    // MostSign,
    // MostUpload,
    // MostContact,
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
