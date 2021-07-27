<template>
  <div class="line" v-on:click="changeMode()">
    {{name}}
    <div
      :class="{ isOn: this.$store.state.modeTable[this.modeName] === 1,
                isOff: this.$store.state.modeTable[this.modeName] === 0 }"
    >
      {{getStatus()}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineMode',
  props: {
    modeName: Number,
    name: String,
  },
  methods: {
    navigation() {
      const url = `http://127.0.0.1:5000/robot/${this.$store.state.robotName}/manual/0`;
      this.$axios.get(url, { headers: { 'Access-Control-Allow-Origin': '*' } })
        .then((resp) => {
          console.log(resp.data);
        }).catch((error) => {
          console.log(error);
        });
      this.show = false;
    },
    getStatus() {
      if (this.$store.state.modeTable[this.modeName] === 1) {
        return 'ON';
      }
      return 'OFF';
    },
    changeMode() {
      if (this.name === 'WAITING' && !this.$store.state.modeTable[0]) {
        this.navigation();
      }
      this.$store.commit('changingMode', this.modeName);
    },
  },
};
</script>

<style scoped lang='scss'>
.line {
  position: relative;
  border-bottom: solid 1px #c5c5c565;;
  padding: 2%;
  font-size: 200%;
  width: 96%;
  height: 8%;
  font-weight: bold;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: rgba($color: #000000, $alpha: 0.03);
  }
}
.isOn {
  z-index: 1;
  position: absolute;
  height: 50%;
  right: 15%;
  top: 10%;
  transition: .3s;
  font-weight: normal !important;
  &:hover {
    cursor: pointer;
  }
  color: green;
  // text-shadow:
  //   0 0 .25rem green,
  //   // 0 0 .5rem green,
  //   // 0 0 1rem green,
  //   // 0 0 1rem green;
}
.isOff {
  z-index: 1;
  position: absolute;
  height: 50%;
  right: 15%;
  top: 10%;
  transition: .3s;
  font-weight: normal !important;
  &:hover {
    cursor: pointer;
  }
  color: red;
  // text-shadow:
  //   0 0 .25rem red,
  //   // 0 0 .5rem red,
  //   // 0 0 1rem red,
  //   // 0 0 1rem red;
}
</style>
