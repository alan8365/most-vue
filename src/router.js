import {createRouter, createWebHistory} from 'vue-router';
import MostNews from './stories/News.vue';
import MostAgenda from './stories/Agenda.vue';
import MostMeetInfo from './stories/MeetInfo.vue';
import MostSign from './stories/Sign.vue';
import MostUpload from './stories/Upload.vue';
import MostContact from './stories/Contact.vue';


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: MostNews},
    {path: '/agenda', component: MostAgenda},
    {path: '/meet-info', component: MostMeetInfo},
    {path: '/sign', component: MostSign},
    {path: '/upload', component: MostUpload},
    {path: '/contact', component: MostContact},
  ],
});
