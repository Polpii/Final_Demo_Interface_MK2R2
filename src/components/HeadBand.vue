<template>
  <div class="headband">
    <div class="status">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="heartbeat">
        <circle cx="50" cy="50" r="50" :style="{ 'fill': getColor() }" />
      </svg>
      <h2>Status : {{getStatus()}}</h2>
    </div>
    <h2>Name : {{name}}</h2>
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
  props: {
    name: String,
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
  .status {
    display: flex;
    .heartbeat {
      width: 50px;
      animation: heartbeat 1.5s ease-in-out infinite both;
    }
    h2 {
      margin-left: 20px;
      display: inline-block;
    }
  }
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  23% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}

</style>
