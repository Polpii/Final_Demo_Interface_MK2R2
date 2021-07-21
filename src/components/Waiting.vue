<template>
  <div class="waiting">
    <p id="command">Give a command to {{this.name}} ! </p>
    <div class="point">D</div>
    <div class="point">E</div>
    <div class="point">V</div>
    <div class="point">O</div>
  </div>
</template>

<script>
export default {
  name: 'Waiting',
  props: {
    name: String,
  },
};
</script>

<style scoped lang='scss'>
.waiting {
  position: absolute;
  top: 67%;
  left: 51%;
  width: 22.5%;
  height: 30%;
  font-size: 7vh;
  font-weight: bold;
  border: #c5c5c5;
  border-width: 2px;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
#command {
  position: absolute;
  top: 0%;
  font-size: 1.5vh;
}
.point {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: inline-block;
  margin: 7vh 2vh 10vh 2vh;
  animation: scaling 5s ease-in-out infinite;
}
.point:nth-child(0) {
  animation-delay: 0s;
}
.point:nth-child(1) {
  animation-delay: 0.2s;
}
.point:nth-child(2) {
  animation-delay: 0.4s;
  margin-left: .2rem;
}
.point:nth-child(3) {
  animation-delay: 0.6s;
  margin-left: .2rem;
}
.point:nth-child(4) {
  animation-delay: 0.8s;
  margin-left: -.7rem;
}
.point:nth-child(5) {
  animation-delay: 1s;
  margin-left: .2rem;
}
@keyframes scaling {
  0%, 100%{
    transform: scale(0.6);
    color: #f1923b;
  }
  40%{
    transform: scale(1);
    color: #e9695a;
  }
  50%{
    transform: scale(1);
    color: #de3366;
  }
}
</style>
