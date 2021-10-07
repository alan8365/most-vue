import {createApp} from 'vue';
import App from './App.vue';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faChevronUp, faExclamationTriangle, faTimes, faCaretRight, faCloudUploadAlt, faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {router} from './router';

import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(faChevronUp, faExclamationTriangle, faTimes, faCaretRight, faCloudUploadAlt, faSpinner);

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
