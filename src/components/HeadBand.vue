<template>
  <div class="headband">
    <svg
      id="onlineCircle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-40 -40 80 80"
      :style="{ 'fill': getColor() }"
    >
      <circle r="39"/>
    </svg>
    <h1>Status : {{getStatus()}}</h1>
    <h1>Name : {{name}}</h1>
    <h1>IP : {{ip}}</h1>
    <h1>Ping : {{ping}}</h1>
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
    status: Boolean,
    name: String,
    ip: String,
    ping: Number,
  },
  methods: {
    getColor() {
      if (this.status) {
        return 'green';
      }
      return 'red';
    },
    getStatus() {
      if (this.status) {
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
    font-size: 250%;
  }
  #onlineCircle {
    position: absolute;
    top: 12.5%;
    left: 0%;
    width:10%;
    height: 75%;
  }
</style>
