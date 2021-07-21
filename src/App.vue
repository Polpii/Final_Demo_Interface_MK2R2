<template>
  <div id="app" v-aspect-ratio="'16:9'">
    <img id="logo" src="./assets/DVIC_logo/dvic-large.png">
    <HeadBand :status='false' name="MK2R2" ip="172.21.72.151" :ping="534"/>
    <Hour/>
    <Stream url="https://i.picsum.photos/id/554/200/200.jpg?hmac=wvBDWVN6iXLUYv4DYpQ9fWSg_2y3dCYyzy4N_6H26pY"/>
    <Map/>
    <Sensors :front="1" :fLeft="0" :fRight="3" :back="2" :bLeft="2" :bRight="3"/>
    <ModeSelector/>
    <Waiting name='MK2R2' v-show="this.$store.state.waitingMode"/>
    <Manual v-show="this.$store.state.manualMode"/>
    <Follow v-show="this.$store.state.followMode"/>
    <Home pourcent="0" v-show="this.$store.state.homeMode"/>
    <Guide v-show="this.$store.state.guideMode"/>
    <RobotInfos/>
    <Stats
      volt="15"
      heatCore="32"
      esp32_A="ON"
      esp32_B="ON"
      slam="WORKING"
      speed="7.8"
      timeUsed="32"
    />
  </div>
</template>

<script>
import Follow from './components/Follow.vue';
import Guide from './components/Guide.vue';
import HeadBand from './components/HeadBand.vue';
import Home from './components/Home.vue';
import Hour from './components/Hour.vue';
import Manual from './components/Manual.vue';
import Map from './components/Map.vue';
import ModeSelector from './components/ModeSelector.vue';
import RobotInfos from './components/RobotInfos.vue';
import Stats from './components/Stats.vue';
import Stream from './components/Stream.vue';
import Sensors from './components/Sensors.vue';
import Waiting from './components/Waiting.vue';

export default {
  name: 'App',
  components: {
    Follow,
    Guide,
    HeadBand,
    Home,
    Hour,
    Manual,
    Map,
    ModeSelector,
    RobotInfos,
    Sensors,
    Stats,
    Stream,
    Waiting,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang='scss'>
  @import './assets/styles.scss';
</style>
