<template>
  <div class="mode">
    <Mode name="WAITING" modeName="waitingMode"/>
    <Mode name="MANUAL" modeName="manualMode"/>
    <Mode name="FOLLOW" modeName="followMode"/>
    <Mode name="HOME" modeName="homeMode"/>
    <Mode name="GUIDE" modeName="guideMode"/>
    <Mode name="CLEANING" modeName="cleaningMode"/>
    <Mode id='last' name="SURVEILLANCE" modeName="surveillanceMode"/>
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
