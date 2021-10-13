const axios = require('axios');

const getCoins = (callback) => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res => {
    callback(null, res.data);
  })
  .catch(err => {
    // console.log(err);
    callback(err);
  })
}

module.exports.getCoins = getCoins;