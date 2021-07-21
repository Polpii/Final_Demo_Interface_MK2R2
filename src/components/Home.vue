<template>
  <div
    class="infos"
    v-bind:style="{ 'background-color' : this.getColor(this.pourcent)}"
  >
    <p id="pourcent">{{pourcent}}%</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    pourcent: String,
  },
  methods: {
    changeFix() {
      this.fix = !this.fix;
    },
    getPathDone() {
      if (this.pourcent === '100') {
        return true;
      }
      return false;
    },
    getColor(pourcent) {
      let red = 255; // i.e. FF
      let green = 0;
      if (pourcent <= 50) {
        green = (255 / 50) * pourcent;
      } else {
        green = 255;
      }
      if (pourcent > 50) {
        red = 255 - ((pourcent - 50) * 5.1);
      }
      return `rgba(${red}, ${green}, 0, 0.2)`;
    },
  },
};
</script>

<style scoped lang='scss'>
.infos {
  position: absolute;
  top: 67%;
  left: 51%;
  width: 22.5%;
  height: 30%;
  border: #c5c5c5;
  border-width: 2px;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
.red {
  background-color: rgba($color: #ff0000, $alpha: .2);
}
.redd {
  background-color: rgba(255, 0, 0, 0.2);
}
.green {
  background-color: rgba($color: #00ff00, $alpha: .2);
}
#pourcent {
  text-align: center;
  font-size: 6rem;
  width: 100%;
}

</style>
