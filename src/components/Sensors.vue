<template>
  <div class="sensors">
    <img id="robot" src="../assets/robot.png">
      <div class="sensors-wrapper">
        <Sensor class="sensor left" :alert="left"/>
        <Sensor class="sensor fLeft" :alert="fLeft"/>
        <Sensor class="sensor fRight" :alert="fRight"/>
        <Sensor class="sensor right" :alert="right"/>
        <Sensor class="sensor bLeft" :alert="bLeft"/>
        <Sensor class="sensor back" :alert="back"/>
        <Sensor class="sensor bRight" :alert="bRight"/>
    </div>
  </div>
</template>

<script>
import Sensor from './Sensor.vue';

export default {
  name: 'Sensors',
  components: {
    Sensor,
  },
  props: {
    left: Number,
    right: Number,
    fLeft: Number,
    fRight: Number,
    back: Number,
    bLeft: Number,
    bRight: Number,
  },
};
</script>

<style scoped lang='scss'>
.sensors {
  position: absolute;
  top: 67%;
  left: 2%;
  width: 22.5%;
  height: 30%;
  background-color: rgba($color: #000000, $alpha: 0);
  border: #c5c5c5;
  border-width: 2px;
  border-style: solid;
  // display: flex;
  // justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#robot {
  z-index: 1;
  position: absolute;
  //left: 46%;
  //left: 120px;
  //top: 12vh;
  //top: 122px;
  width: 50px;
  height: 10%;
}
.sensors-wrapper {
  height: 210px;
  width: 100%;
}
.sensor {
  margin: 1%;
  position: absolute;
  //width: 14%;
  width: 45px;
  left: 43%;
  text-align: center;
}
.left {
  transform-origin: bottom;
  transform: rotate(-20deg);
}
.right {
  transform-origin: bottom;
  transform: rotate(20deg);
}
.fLeft {
  transform-origin: bottom;
  transform: rotate(-60deg);
}
.fRight {
  transform-origin: bottom;
  transform: rotate(60deg);
}
.back {
  transform-origin: bottom;
  transform: rotate(180deg);
}
.bLeft {
  transform-origin: bottom;
  transform: rotate(-135deg);
}
.bRight {
  transform-origin: bottom;
  transform: rotate(135deg);
}
</style>
