<template>
  <div>
    <svg width="100%" height="100%" viewBox="0 0 200 440" xmlns="http://www.w3.org/2000/svg">
    <g>
      <g id="bot">
        <path
          opacity="NaN"
          v-bind:style="{ 'fill' : this.getAlertLV3(alert)}"
          d="M74.28167,239.80055c28.51148,-24.94087 49.77004,0.58684 49.77004,0.58684
              L99.51318 339.80055
              L74.28167 239.80055 Z"
          />
      </g>
      <g id="mid">
        <path
          opacity="NaN"
          v-bind:style="{ 'fill' : this.getAlertLV2(alert)}"
          d="M46.51318,127.80055c60.86158,-32.46528 106.24082,0.76389 106.24082,0.76389
              L129.51318 219.80055
              M129.51318,219.80055C129.51318,219.80055 104.19086,195.93051 69.82052,219.80055
              L46.51318 127.80055"
          />
      </g>
      <g id="top">
        <path
          opacity="NaN"
          v-bind:style="{ 'fill' : this.getAlertLV1(alert)}"
          d="M25.51318,43.80055c84.97061,-56.09224 148.32589,1.31982 148.32589,1.31982
              L156.51318 112.26239
              M156.51318,112.26239C156.51318,112.26239 108.10252,71.46218 42.6534,111.19143
              L25.51318 43.80055"
          id="svg_8"/>
      </g>
      <g id="main">
        <path
          fill="none" opacity="NaN"
          d="M200.10142,40.38878c-103.04007,-92.84162 -200.00342,-0.63158 -200.01024,-0.64383
              L100.10142 440.38878
              L200.10142 40.38878"
          stroke="#000"/>
      </g>
    </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Sensor',
  props: {
    id: String,
    alert: Number,
  },
  methods: {
    getAlertLV1() {
      if (this.alert === 1) {
        return 'green';
      }
      return 'none';
    },
    getAlertLV2() {
      if (this.alert === 1) {
        return 'green';
      }
      if (this.alert === 2) {
        return 'orange';
      }
      return 'none';
    },
    getAlertLV3() {
      if (this.alert === 1) {
        return 'green';
      }
      if (this.alert === 2) {
        return 'orange';
      }
      if (this.alert >= 3) {
        return 'red';
      }
      return 'none';
    },
  },
};
</script>

<style scoped lang='scss'>
// .sensor {
//   position: absolute;
//   top: 67%;
//   left: 2%;
//   width: 22.5%;
//   height: 30%;
//   background-color: rgba($color: #000000, $alpha: 0);
//   border: #c5c5c5;
//   border-width: 2px;
//   border-style: solid;
//   display: flex;
//   justify-content: center;
// }
</style>
