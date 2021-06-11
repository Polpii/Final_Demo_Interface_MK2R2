<template>
  <div class="mode">
    <Mode name="WAITING"/>
    <Mode name="MANUAL"/>
    <Mode name="FOLLOW"/>
    <Mode name="HOME"/>
    <Mode name="GUIDE"/>
    <Mode name="NETTOYAGE"/>
    <Mode name="SURVEILLANCE"/>
  </div>
</template>

<script>
import Mode from './LineMode.vue';

export default {
  name: 'ModeSelector',
  components: {
    Mode,
  },
  data() {
    return {
      waiting: false,
      manual: false,
      follow: false,
      home: false,
      guide: false,
      nettoyage: false,
      surveillance: false,
    };
  },
  methods: {
    getStatus(mode) {
      if (mode) {
        return 'ON';
      }
      return 'OFF';
    },
    ChangeWaiting() {
      this.waiting = !this.waiting;
    },
    ChangeManual() {
      this.manual = !this.manual;
    },
    ChangeFollow() {
      this.follow = !this.follow;
    },
    ChangeHome() {
      this.home = !this.home;
    },
    ChangeGuide() {
      this.guide = !this.guide;
    },
    ChangeNettoyage() {
      this.nettoyage = !this.nettoyage;
    },
    ChangeSurveillance() {
      this.surveillance = !this.surveillance;
    },
  },
};
</script>

<style scoped lang='scss'>
.mode {
  position: absolute;
  top: 67%;
  left: 26.5%;
  width: 22.5%;
  height: 30%;
  background-color: rgba($color: #000000, $alpha: 0);
  border: #c5c5c5;
  border-width: 2px;
  border-style: solid;
}
// .line {
//   position: relative;
//   padding: 2%;
//   font-size: 200%;
//   width: 100%;
//   height: 9.4%;
//   .isOn {
//     z-index: 1;
//     position: absolute;
//     height: 50%;
//     right: 10%;
//     top: 10%;
//     &:hover {
//       cursor: pointer;
//     }
//     text-shadow:
//       0 0 .25rem red,
//       0 0 .5rem red,
//       0 0 1rem red,
//       0 0 1rem red;
//   }
// }
</style>
