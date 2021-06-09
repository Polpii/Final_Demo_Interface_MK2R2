<template>
  <div class="hour">
    {{time}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      time: null,
    };
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval);
  },
  methods: {
    currentTime() {
      const current = new Date();
      const hours = `${current.getHours() < 10 ? '0' : ''}${current.getHours()}`;
      const minutes = `${current.getMinutes() < 10 ? '0' : ''}${current.getMinutes()}`;
      const seconds = `${current.getSeconds() < 10 ? '0' : ''}${current.getSeconds()}`;
      this.time = `${hours} : ${minutes} : ${seconds}`;
    },
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }).format();
    }, 1000);
  },
};
</script>

<style scoped lang='scss'>
  .hour {
    position: relative;
    left: 88%;
    top: 2%;
    width: 10%;
    height: 8vh;
    background-color: rgba($color: #000000, $alpha: 0);
    border: #c5c5c5;
    border-width: 2px;
    border-style: solid;
    border-radius: 100vh;
    // display: flex;
    // flex: 1 1 auto;
    // flex-direction: row;
    // gap: 10%;
    // justify-content: center;
    // align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 7rem;
  }
</style>
