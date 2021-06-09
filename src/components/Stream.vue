<template>
  <div class="stream">
    <img id='image' :src= url>
  </div>
</template>

<script>
export default {
  name: 'Stream',
  props: {
    url: String,
  },
};
</script>

<style scoped lang='scss'>
.stream {
  position: absolute;
  top: 13%;
  left: 2%;
  width: 47%;
  height: 50%;
  background-color: rgba($color: #000000, $alpha: 0);
  border: #c5c5c5;
  border-width: 2px;
  border-style: solid;
}
#image {
  width: 100%;
  height: 100%;
}
</style>
