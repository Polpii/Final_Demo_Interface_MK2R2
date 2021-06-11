export const state = () => ({
  manualMode: false,
  // idRobot: ''
});

export const mutations = {
  manualModeChange() {
    state.manualMode = !state.manualMode;
  },
  // closeNav(state) {
  //   state.isNavOpen = false;
  // },
  // toggleId(state, payload) {
  //   state.idRobot = payload;
  // },
};
