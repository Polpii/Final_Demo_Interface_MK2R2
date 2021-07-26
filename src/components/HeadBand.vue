<template>
  <div class="headband">
    <svg
      id="onlineCircle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-40 -40 80 80"
      v-aspect-ratio="'1:1'"
      :style="{ 'fill': getColor() }"
    >
      <circle r="39"/>
    </svg>
    <h2>Status : {{getStatus()}}</h2>
    <h2>Name : {{this.$store.state.robotName}}</h2>
    <h2>IP : {{this.$store.state.robotIP}}</h2>
    <h2>Ping : {{this.$store.state.robotPing}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HeadBand',
  data() {
    return {
      statusString: '',
    };
  },
  methods: {
    getColor() {
      if (this.$store.state.robotOnline) {
        return 'green';
      }
      return 'red';
    },
    getStatus() {
      if (this.$store.state.robotOnline) {
        return 'Online';
      }
      return 'Offline';
    },
  },
};
</script>

<style scoped lang='scss'>
  .headband {
    position: absolute;
    left: 18%;
    top: 2%;
    width: 68%;
    height: 8vh;
    background-color: rgba($color: #000000, $alpha: 0);
    border: #c5c5c5;
    border-width: 2px;
    border-style: solid;
    border-radius: 100vh;
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    gap: 10%;
    justify-content: center;
    align-items: center;
  }
  #onlineCircle {
    position: absolute;
    top: 12.5%;
    left: 1%;
    // width:5%;
    height: 75%;
  }
</style>
