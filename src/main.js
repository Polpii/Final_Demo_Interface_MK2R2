import Vue from 'vue';
import AspectRatio from 'v-aspect-ratio';
import App from './App.vue';

Vue.use(AspectRatio);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
