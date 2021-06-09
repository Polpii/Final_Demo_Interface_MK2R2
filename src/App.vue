<template>
  <div id="app">
    <img id="logo" src="./assets/DVIC_logo/dvic-large.png">
    <HeadBand :status='true' name="MK2R2" ip="172.21.72.151" :ping="534"/>
    <Hour/>
    <Stream url="https://i.picsum.photos/id/554/200/200.jpg?hmac=wvBDWVN6iXLUYv4DYpQ9fWSg_2y3dCYyzy4N_6H26pY"/>
    <Map/>
    <Sensor/>
    <ModeSelector/>
    <Stats/>
    <RobotInfos/>
  </div>
</template>

<script>
import HeadBand from './components/HeadBand.vue';
import Hour from './components/Hour.vue';
import Map from './components/Map.vue';
import ModeSelector from './components/ModeSelector.vue';
import RobotInfos from './components/RobotInfos.vue';
import Stats from './components/Stats.vue';
import Stream from './components/Stream.vue';
import Sensor from './components/Sensor.vue';

export default {
  name: 'App',
  components: {
    HeadBand,
    Hour,
    Map,
    ModeSelector,
    RobotInfos,
    Sensor,
    Stats,
    Stream,
  },
};
</script>

<style lang='scss'>
  @import './assets/styles.scss';
</style>
