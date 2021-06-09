<template>
  <div class="map">
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    msg: String,
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
</style>
