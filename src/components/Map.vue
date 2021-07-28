<template>
  <div class="map">
    <img id='image' :src= url>
    <img
      id='robotPoint'
      src= '../assets/robotPoint.png'
      :style="{
        'left': getX(),
        'top': getY()
      }"
    >
    <!-- <svg id='robotPoint' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="heartbeat">
      <circle cx="0" cy="0" r="1" :style="{ 'fill': 'red' }" />
    </svg> -->
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    url: String,
  },
  methods: {
    getX() {
      return `${this.$store.state.position[0]}%`;
    },
    getY() {
      return `${this.$store.state.position[1]}%`;
    },
  },
};
</script>

<style scoped lang='scss'>
.map {
  position: absolute;
  top: 13%;
  left: 51%;
  width: 47%;
  height: 50vh;
  background-color: rgba($color: #000000, $alpha: 0);
  border: #c5c5c5;
  border-width: 2px;
  border-style: solid;
}
#image {
  z-index: -1;
  width: 100%;
  height: 100%;
}
#robotPoint {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  z-index: 1;
}
</style>
