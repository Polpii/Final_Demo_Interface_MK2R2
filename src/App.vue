<template>
  <div id="app" v-aspect-ratio="'16:9'">
    <img id="logo" src="./assets/DVIC_logo/dvic-large.png">
    <HeadBand/>
    <Hour/>
    <Stream :url="this.$store.state.url"/>
    <ListenSocket/>
    <Map/>
    <Sensors
      :left="this.$store.state.sensors[0]"
      :fLeft="this.$store.state.sensors[1]"
      :fRight="this.$store.state.sensors[2]"
      :right="this.$store.state.sensors[3]"
      :bLeft="this.$store.state.sensors[4]"
      :back="this.$store.state.sensors[5]"
      :bRight="this.$store.state.sensors[6]"
    />
    <ModeSelector/>
    <Waiting v-show="this.$store.state.modeTable[0] === 1"/>
    <Manual v-show="this.$store.state.modeTable[1] === 1"/>
    <Follow v-show="this.$store.state.modeTable[2] === 1"/>
    <Home
      v-on:click="plus()"
      :pourcent="this.$store.state.homePourcent"
      v-show="this.$store.state.modeTable[3] === 1"
    />
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
import ListenSocket from './components/ListenSocket.vue';
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
    ListenSocket,
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
  methods: {
    plus() {
      this.$store.commit('plus');
    },
  },
};
</script>

<style lang='scss'>
  @import './assets/styles.scss';
</style>
