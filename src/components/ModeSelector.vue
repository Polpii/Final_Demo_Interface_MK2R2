<template>
  <div class="mode">
    <Mode name="WAITING" :modeName="0"/>
    <Mode name="MANUAL" :modeName="1"/>
    <Mode name="FOLLOW" :modeName="2"/>
    <Mode name="HOME" :modeName="3"/>
    <Mode name="GUIDE" :modeName="4"/>
    <Mode name="CLEANING" :modeName="5"/>
    <Mode id='last' name="SURVEILLANCE" :modeName="6"/>
  </div>
</template>

<script>
import Mode from './LineMode.vue';

export default {
  name: 'ModeSelector',
  components: {
    Mode,
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
  display: flex;
  flex-direction: column;

}
#last {
  border-bottom: solid 0px;
}
</style>
