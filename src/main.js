import AspectRatio from 'v-aspect-ratio';
import axios from 'axios';
import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import store from './store';

Vue.use(AspectRatio);
Vue.prototype.$http = axios;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://127.0.0.1/5000', // options object is Optional
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
}));

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
