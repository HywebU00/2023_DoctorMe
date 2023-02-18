// import Vue from 'vue'
// import App from './App.vue'
// import vuetify from './plugins/vuetify';

// Vue.config.productionTip = false

// new Vue({
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')

import 'babel-polyfill';
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import store from './store';

import './sass/variables.scss';

import util from './util.js';
Vue.use(util);
// import codeDataUtil from "../codeDataUtil.js";
// Vue.use(codeDataUtil);
import idbModel from './idbModel.js';
Vue.use(idbModel);

import fakeModel from './fakeModel.js';
Vue.use(fakeModel);

import lesModel from './lesModel.js';
Vue.use(lesModel);

import wep1Language from './wep1Language.js';
Vue.use(wep1Language);

// import modelB from './modelB.js'
// Vue.use(modelB);

import VueLocalStorage from 'vue-localstorage';
Vue.use(VueLocalStorage);

// import VuetifyDateTime from "vuetify-datetime";
// Vue.use(VuetifyDateTime);

import DatetimePicker from 'vuetify-datetime-picker';
Vue.use(DatetimePicker);
import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);

import IdleVue from 'idle-vue';
Vue.use(IdleVue, { store, idleTime: 5000 });

import moment from 'moment';
Vue.use(moment);

// import vue2Dropzone from "src/vue2-dropzone/dist/vue2Dropzone.js";
// import vue2Dropzone from "vue2-dropzone";
// Vue.use(vue2Dropzone);

//test
// import './sass/main.scss'
// import gmapsInit from "./gmaps";
// Vue.use(gmapsInit);

import wysiwyg from 'vue-wysiwyg';
Vue.use(wysiwyg, {
  hideModules: {
    // "justifyLeft": true,
    // "justifyCenter": true,
    // "justifyRight": true,
    headings: true,
    link: true,
    code: true,
    orderedList: true,
    unorderedList: true,
    image: true,
    table: true,
    removeFormat: true,
    separator: true,
  },
});

import VueCountdownTimer from 'vuejs-countdown-timer';
Vue.use(VueCountdownTimer);

import VueSSE from 'vue-sse';
Vue.use(VueSSE);

import VueHead from 'vue-head';

Vue.use(VueHead);

// import VeeValidate from 'vee-validate'

// Vue.use(VeeValidate)

// import './style/elements/_typography.sass'

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
