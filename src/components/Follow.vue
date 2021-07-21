<template>
  <div class="infos">
    <input class="input" v-model="id" placeholder="ENTER AN ID">
    <button
      class="button"
      v-show="!fix"
      v-on:click="changeFix()"
    >
      FIX
    </button>
    <button
      class="button"
      v-show="fix"
      v-on:click="changeFix()"
    >
      UNFIX
    </button>
  </div>
</template>

<script>
export default {
  name: 'Follow',
  data() {
    return {
      fix: false,
      id: '',
    };
  },
  methods: {
    changeFix() {
      this.fix = !this.fix;
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
  background-color: rgba($color: #000000, $alpha: 0);
  border: #c5c5c5;
  border-width: 2px;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input {
  z-index: 1;
  border: none;
  background-color: rgba($color: #000000, $alpha: 0);
  position: absolute;
  top: 0%;
  font-size: 4vh;
  width: 100%;
  height: 50%;
  text-align: center;
}
.button {
  z-index: 1;
  // border: none;
  position: absolute;
  top: 50%;
  font-size: 4vh;
  width: 100%;
  height: 50%;
  text-align: center;
}

</style>
