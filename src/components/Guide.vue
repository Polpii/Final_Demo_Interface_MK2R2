<template>
  <div class="infos">
    <LineGuide name="Foodtech" :modeName="0"/>
    <LineGuide name="Biolab" :modeName="1"/>
    <LineGuide name="Electronic" :modeName="2"/>
    <LineGuide name="WaterBar" :modeName="3"/>
    <LineGuide name="Snook" :modeName="4"/>
    <LineGuide name="Elevators" :modeName="5"/>
    <LineGuide name="Mirror" :modeName="6"/>
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
