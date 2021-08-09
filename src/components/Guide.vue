<template>
  <div class="infos">
    <LineGuide name="Foodtech"/>
    <LineGuide name="Biolab"/>
    <LineGuide name="Electronic"/>
    <LineGuide name="WaterBar"/>
    <LineGuide name="Snook"/>
    <LineGuide name="Elevators"/>
    <LineGuide name="Mirror"/>
  </div>
</template>

<script>
import LineGuide from './LineGuide.vue';

export default {
  name: 'Guide',
  components: {
    LineGuide,
  },
};
</script>

<style scoped lang='scss'>
.infos {
  position: absolute;
  top: 67%;
  left: 51%;
  width: 22.5%;
  height: 30%;
  border: #c5c5c5;
  border-width: 2px;
  border-style: solid;
}
</style>
