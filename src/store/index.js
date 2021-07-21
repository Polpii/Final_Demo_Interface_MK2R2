import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    waitingMode: true,
    manualMode: false,
    followMode: false,
    homeMode: false,
    guideMode: false,
    cleaningMode: false,
    surveillanceMode: false,
  },
  mutations: {
    waitingMode() {
      this.state.waitingMode = !this.state.waitingMode;
    },
    manualMode() {
      this.state.manualMode = !this.state.manualMode;
    },
    followMode() {
      this.state.followMode = !this.state.followMode;
    },
    homeMode() {
      this.state.homeMode = !this.state.homeMode;
    },
    guideMode() {
      this.state.guideMode = !this.state.guideMode;
    },
  },
  actions: {
  },
  modules: {
  },
});
