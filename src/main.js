import AspectRatio from 'v-aspect-ratio';
import axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.use(AspectRatio);
Vue.prototype.$http = axios;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
