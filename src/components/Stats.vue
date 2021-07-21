<template>
  <div class="stats">
    <div
      class="stat"
      id="volt"
    >
      <img src="../assets/statIcons/lighting.png">
      Voltage : {{volt}} V
    </div>
    <div
      class="stat"
      id="temp"
    >
      <img src="../assets/statIcons/thermometer.png">
      HeatCore : {{heatCore}} °C
    </div>
    <div
      class="stat"
      id="esp32_A"
    >
      <img src="../assets/statIcons/puce-electronique.png">
      ESP32-A : {{esp32_A}}
    </div>
    <div
      class="stat"
      id="esp32_B"
    >
      <img src="../assets/statIcons/puce-electronique.png">
      ESP32-B : {{esp32_B}}
    </div>
    <div
      class="stat"
      id="slam"
    >
      <img src="../assets/statIcons/oeil.png">
      SLAMCORE : {{slam}}
    </div>
    <div
      class="stat"
      id="speed"
    >
      <img src="../assets/statIcons/download-speed.png">
      Speed : {{speed}} km/h
    </div>
    <div
      class="stat"
      id="time"
    >
      <img src="../assets/statIcons/clock.png">
      Time Used : {{timeUsed}} min
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  props: {
    url: String,
    volt: String,
    heatCore: String,
    esp32_A: String,
    esp32_B: String,
    slam: String,
    speed: String,
    timeUsed: String,

  },
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
  // img {
  //   background-color: rgba($color: yellow, $alpha: 0.2)
  // }
  color: rgb(255, 174, 0);
  // text-shadow:
  //   0 0 .125rem yellow,
}
#temp {
  // img {
  //   background-color: rgba($color: red, $alpha: 0.3)
  // }
  color: red;
  // text-shadow:
  //   0 0 .125rem red,
}
#esp32_A {
  // img {
  //   background-color: rgba($color: blue, $alpha: 0.2)
  // }
  color: blue;
  // text-shadow:
  //   0 0 .125rem blue,
}
#esp32_B {
  // img {
  //   background-color: rgba($color: blue, $alpha: 0.2)
  // }
  color: blue;
  // text-shadow:
  //   0 0 .125rem blue,
}
#slam {
  // img {
  //   background-color: rgba($color: green, $alpha: 0.3)
  // }
  color: green;
  // text-shadow:
  //   0 0 .125rem green,
}
#speed {
  // img {
  //   background-color: rgba($color: red, $alpha: 0.3)
  // }
  color: purple;
  // text-shadow:
  //   0 0 .125rem purple,
}
#time{
  // img {
  //   background-color: rgba($color: yellow, $alpha: 0.2)
  // }
  color: purple;
  // text-shadow:
  //   0 0 .125rem purple,
}
</style>
