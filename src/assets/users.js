const axios = require('axios');

module.exports = {
  ping(user) {
    return axios.get('http://localhost:2345/ping', {
      params: {
        id: user.id.$oid,
        user_id: user.user_id,
      },
    }).then().catch();
  },
};
