<template>
  <div id="app" v-aspect-ratio="'16:9'">
    <img id="logo" src="./assets/DVIC_logo/dvic-large.png">
    <HeadBand/>
    <Hour/>
    <Stream :url="this.$store.state.url"/>
    <Map/>
    <Sensors
      :front="this.$store.state.sensors[0]"
      :fLeft="this.$store.state.sensors[1]"
      :fRight="this.$store.state.sensors[2]"
      :back="this.$store.state.sensors[3]"
      :bLeft="this.$store.state.sensors[4]"
      :bRight="this.$store.state.sensors[5]"
    />
    <ModeSelector/>
    <Waiting v-show="this.$store.state.modeTable[0] === 1"/>
    <Manual v-show="this.$store.state.modeTable[1] === 1"/>
    <Follow v-show="this.$store.state.modeTable[2] === 1"/>
    <Home pourcent="0" v-show="this.$store.state.modeTable[3] === 1"/>
    <Guide v-show="this.$store.state.modeTable[4] === 1"/>
    <RobotInfos/>
    <Stats/>
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
