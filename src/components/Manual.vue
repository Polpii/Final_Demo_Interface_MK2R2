<template>
  <div class="infos">
    <div  class="controls" v-aspect-ratio="'1:1'">
      <div id="Forward" v-on:click="navigation('1')" class="control"></div>
      <div id="Left" v-on:click="navigation('3')" class="control"></div>
      <div id="Right" v-on:click="navigation('4')" class="control"></div>
      <div id="Backward" v-on:click="navigation('2')" class="control"></div>
      <div id="Upper_Diagonal_Right" v-on:click="navigation('8')" class="control"></div>
      <div id="Upper_Diagonal_Left" v-on:click="navigation('7')" class="control"></div>
      <div id="Down_Diagonal_Left" v-on:click="navigation('9')" class="control"></div>
      <div id="Down_Diagonal_Right" v-on:click="navigation('10')" class="control"></div>
      <svg id="Center" v-on:click="navigation('0')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="orange"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RobotInfos',
  props: {
    ip: String,
  },
  methods: {
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
.controls {
  position: relative;
  width: 95%;
}
.control {
  position: absolute;
  display: block;
  width: 15%;
  height: 15%;
  background-image: url('../assets/arrow.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  z-index: 1;
  transition: .2s;
  &:hover {
    opacity: 0.6;
  }
}
#Left{
  top: 42.5%;
  left: 17%;
  transform: rotate(180deg);
}
#L {
  top: 42.5%;
  left: 0%;
  transform: rotate(180deg);
}
#Right {
  top: 42.5%;
  right: 17%;
}
#R {
  top: 42.5%;
  right: 0%;
}
#Forward {
  display: block;
  top: 17%;
  left: 42.5%;
  transform: rotate(-90deg);
}
#Upper_Diagonal_Left {
  display: block;
  top: 22%;
  left: 22%;
  transform: rotate(-135deg);
}
#Upper_Diagonal_Right {
  display: block;
  top: 22%;
  right: 22%;
  transform: rotate(-45deg);
}
#Backward {
  transform: rotate(90deg);
  left: 42.5%;
  bottom: 17%;
}
#Down_Diagonal_Left {
  transform: rotate(135deg);
  left: 22%;
  bottom: 22%;
}
#Down_Diagonal_Right {
  transform: rotate(45deg);
  right: 22%;
  bottom: 22%;
}
#Center{
  position: absolute;
  z-index: 1;
  width: 40%;
  height: 40%;
  right: 30%;
  bottom: 30%;
  cursor: pointer;
  transition: .2s;
  &:hover {
    opacity: 0.6;
  }
}
</style>
