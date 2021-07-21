<template>
  <div class="line">
    {{name}}
    <div id="go" v-on:click="changeMode()" :class="{ going: !going}">GO</div>
  </div>
</template>

<script>
export default {
  name: 'LineGuide',
  data() {
    return {
      going: true,
    };
  },
  props: {
    modeName: String,
    name: String,
  },
  methods: {
    getName() {
      return this.name;
    },
    changeMode() {
      this.going = !this.going;
    },
  },
};
</script>

<style scoped lang='scss'>
.line {
  z-index: 1;
  position: relative;
  padding: 2%;
  font-size: 200%;
  width: 96%;
  height: 8.4%;
  display: flex;
  align-items: center;
  // &:hover{
  //   cursor: pointer;
  //   background-color: rgba($color: #000000, $alpha: 0.03);
  // }
}
#go {
  position: absolute;
  z-index: 1;
  margin-top: 1%;
  font-size: 1.5rem;
  border: solid 1px green;
  border-radius: 20%;
  text-align: center;
  width: 10%;
  height: 80%;
  top: 0%;
  right: 10%;
  transition: .3s;
  &:hover{
    cursor: pointer;
    background-color: rgba($color: green, $alpha: .2)
  }
}
.going {
  background-color: green;
}
</style>
