<template>
  <div class="infos">
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
</style>
