<template>
  <div id="app">
  </div>
</template>

<script>
const io = require('socket.io-client');
const users = require('@/assets//users');

export default {
  name: 'Chat',
  methods: {
    sendMessage(e) {
      e.preventDefault();

      this.socket.emit('SEND_MESSAGE', {
        color: '#abc',
        user: 'User 4',
        msg: this.message,
      });

      this.message = '';

      console.log('message send to websocket server');
    },

    ping_service() {
      if (this.user !== null) {
        clearTimeout(this.ping_timeout);
        console.log('ping_timeout', this.ping_timeout);

        this.ping_timeout = setTimeout(() => {
          users.ping(this.user);
          this.ping_service();
        }, 1000);
      }
    },
  },

  computed: {
    socket() {
      const query = {};
      return io('localhost:5000', {
        query,
      });
    },
  },

  mounted() {
    this.socket.emit('interface', 'interface_DVIC');
    this.socket.on('MESSAGE', (socket) => {
      if (socket.mode === 'waiting') {
        this.$store.commit('startWaiting');
      }
      this.$store.commit('updateSensors', socket.sensors);
      this.$store.commit('updateStats', socket.stats);
      this.$store.commit('updateInfos', socket.infos);
    });
  },
};
</script>
