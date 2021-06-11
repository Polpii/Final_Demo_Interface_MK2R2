<template>
  <div class="line">
    {{name}}
    <div v-on:click="ChangeMode()" :class="{ isOn: mode, isOff: !mode }">{{getStatus(mode)}}</div>
  </div>
</template>

<script>
export default {
  name: 'LineMode',
  data() {
    return {
      mode: false,
    };
  },
  props: {
    name: String,
  },
  methods: {
    getStatus(mode) {
      if (mode) {
        return 'ON';
      }
      return 'OFF';
    },
    ChangeMode() {
      this.mode = !this.mode;
    },
  },
};
</script>

<style scoped lang='scss'>
.line {
  position: relative;
  padding: 2%;
  font-size: 200%;
  width: 100%;
  height: 8.4%;
}
.isOn {
  z-index: 1;
  position: absolute;
  height: 50%;
  right: 10%;
  top: 10%;
  &:hover {
    cursor: pointer;
  }
  text-shadow:
    0 0 .25rem green,
    0 0 .5rem green,
    0 0 1rem green,
    0 0 1rem green;
}
.isOff {
  z-index: 1;
  position: absolute;
  height: 50%;
  right: 10%;
  top: 10%;
  &:hover {
    cursor: pointer;
  }
  text-shadow:
    0 0 .25rem red,
    0 0 .5rem red,
    0 0 1rem red,
    0 0 1rem red;
}
</style>
