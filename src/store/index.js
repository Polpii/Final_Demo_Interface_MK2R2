import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // waiting manual follow home guide cleaning surveillance
    modeTable: [1, 0, 0, 0, 0, 0, 0],

    // identifications
    robotOnline: true,
    robotName: 'MK2R2',
    robotIP: '172.21.72.151',
    robotPing: 533,

    // stream URL
    url: 'https://i.picsum.photos/id/554/200/200.jpg?hmac=wvBDWVN6iXLUYv4DYpQ9fWSg_2y3dCYyzy4N_6H26pY',

    // stats informations
    volt: '0',
    heatCore: '~',
    esp32_A: 'OFF',
    esp32_B: 'OFF',
    slam: 'WAITING',
    speed: '0',
    timeUsed: '~',

    // front fLeft fRight back bLeft bRight
    sensors: [1, 2, 3, 0, 1, 2],
  },
  mutations: {
    allMode() {
      this.state.modeTable = [0, 0, 0, 0, 0, 0, 0];
    },
    changingMode(state, mode) {
      if (this.state.modeTable[mode] === 1) {
        this.state.modeTable = [0, 0, 0, 0, 0, 0, 0];
      } else {
        this.state.modeTable = [0, 0, 0, 0, 0, 0, 0];
        this.state.modeTable[mode] = 1;
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
