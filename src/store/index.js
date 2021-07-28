import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // waiting manual follow home guide cleaning surveillance
    modeTable: [1, 0, 0, 0, 0, 0, 0],

    // identifications
    robotOnline: false,
    robotName: 'MK2R2_1',
    robotIP: '172.21.72.151',
    robotPing: 0,

    // pourcent home mode
    homePourcent: '0',

    // URL
    streamUrl: 'https://i.picsum.photos/id/554/200/200.jpg?hmac=wvBDWVN6iXLUYv4DYpQ9fWSg_2y3dCYyzy4N_6H26pY',
    mapUrl: 'https://i.picsum.photos/id/554/200/200.jpg?hmac=wvBDWVN6iXLUYv4DYpQ9fWSg_2y3dCYyzy4N_6H26pY',
    // map position
    position: [50, 50],

    // stats informations
    volt: '0',
    heatCore: '~',
    esp32_A: 'OFF',
    esp32_B: 'OFF',
    slam: 'WAITING',
    speed: '0',
    timeUsed: '~',

    // left fLeft fRight right bLeft back bRight
    sensors: [0, 0, 0, 0, 0, 0, 0],
  },
  mutations: {
    allMode() {
      this.state.modeTable = [0, 0, 0, 0, 0, 0, 0];
    },
    plus(state) {
      state.homePourcent += 1;
    },
    changingMode(state, mode) {
      if (this.state.modeTable[mode] === 1) {
        this.state.modeTable = [0, 0, 0, 0, 0, 0, 0];
      } else {
        this.state.modeTable = [0, 0, 0, 0, 0, 0, 0];
        this.state.modeTable[mode] = 1;
      }
    },
    startWaiting(state) {
      state.modeTable = [1, 0, 0, 0, 0, 0, 0];
    },
    updateSensors(state, sensors) {
      state.sensors = sensors;
    },
    updateStats(state, stats) {
      state.volt = stats.volt;
      state.heatCore = stats.heatCore;
      state.esp32_A = stats.esp32_A;
      state.esp32_B = stats.esp32_B;
      state.slam = stats.slam;
      state.speed = stats.speed;
      state.timeUsed = stats.timeUsed;
    },
    updateInfos(state, infos) {
      state.robotOnline = infos.status;
      state.robotName = infos.name;
      state.robotIP = infos.ip;
      state.robotPing = infos.ping;
    },
    updatePositionPoint(state, position) {
      state.position = position;
    },
  },
  actions: {
  },
  modules: {
  },
});
