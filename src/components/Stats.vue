<template>
  <div class="stats">
    <div
      class="stat"
      id="volt"
    >
      <img src="../assets/statIcons/lighting.png">
      Voltage : {{this.$store.state.volt}} V
    </div>
    <div
      class="stat"
      id="temp"
    >
      <img src="../assets/statIcons/thermometer.png">
      HeatCore : {{this.$store.state.heatCore}} °C
    </div>
    <div
      class="stat"
      id="esp32_A"
    >
      <img src="../assets/statIcons/puce-electronique.png">
      ESP32-A : {{this.$store.state.esp32_A}}
    </div>
    <div
      class="stat"
      id="esp32_B"
    >
      <img src="../assets/statIcons/puce-electronique.png">
      ESP32-B : {{this.$store.state.esp32_B}}
    </div>
    <div
      class="stat"
      id="slam"
    >
      <img src="../assets/statIcons/oeil.png">
      SLAMCORE : {{this.$store.state.slam}}
    </div>
    <div
      class="stat"
      id="speed"
    >
      <img src="../assets/statIcons/download-speed.png">
      Speed : {{this.$store.state.speed}} km/h
    </div>
    <div
      class="stat"
      id="time"
    >
      <img src="../assets/statIcons/clock.png">
      Time Used : {{this.$store.state.timeUsed}} min
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats',
};
</script>

<style scoped lang='scss'>
.stats {
  position: absolute;
  top: 67%;
  left: 75.5%;
  width: 22.5%;
  height: 30%;
  background-color: rgba($color: #000000, $alpha: 0);
  border: #c5c5c5;
  border-width: 2px;
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  .stat {
    margin: 0.1rem .5rem .1rem .5rem;
    font-size: 2.2vh;
  }
  img {
    width: 7%;
  }
}
#volt {
  color: rgb(255, 174, 0);
}
#temp {
  color: red;
}
#esp32_A {
  color: blue;
}
#esp32_B {
  color: blue;
}
#slam {
  color: green;
}
#speed {
  color: purple;
}
#time{
  color: purple;
}
</style>
