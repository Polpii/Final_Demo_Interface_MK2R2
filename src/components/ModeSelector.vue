<template>
  <div class="mode">
    <img id='image' :src= url>
  </div>
</template>

<script>
export default {
  name: 'ModeSelector',
  props: {
    url: String,
  },
};
</script>

<style scoped lang='scss'>
.mode {
  position: absolute;
  top: 67%;
  left: 26.5%;
  width: 22.5%;
  height: 30%;
  background-color: rgba($color: #000000, $alpha: 0);
  border: #c5c5c5;
  border-width: 2px;
  border-style: solid;
}
</style>
