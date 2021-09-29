import {createApp} from 'vue';
import App from './App.vue';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faChevronUp, faExclamationTriangle, faTimes, faCaretRight, faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {router} from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(faChevronUp, faExclamationTriangle, faTimes, faCaretRight, faCloudUploadAlt);

const app = createApp(App);
app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
