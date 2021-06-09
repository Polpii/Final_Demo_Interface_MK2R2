<template>
  <div class="sensor">
    <img id='image' :src= url>
  </div>
</template>

<script>
export default {
  name: 'Sensor',
  props: {
    url: String,
  },
};
</script>

<style scoped lang='scss'>
.sensor {
  position: absolute;
  top: 67%;
  left: 2%;
  width: 22.5%;
  height: 30%;
  background-color: rgba($color: #000000, $alpha: 0);
  border: #c5c5c5;
  border-width: 2px;
  border-style: solid;
}
</style>
