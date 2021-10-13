const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coins', { useUnifiedTopology: true, useNewUrlParser: true });

// const db = mongoose.connection;
// db.on('error', () => {console.log('mongoose connection error');});

// db.once('open', () => {console.log('mongoose connected successfully');});

const coinSchema = new mongoose.Schema({
  name: String,
  image: String,
  symbol: String,
  marketcap: Number,
  price: Number,
  priceChange: Number,
  volume: Number,
  favorite: false
});

const Coin = mongoose.model('Coin', coinSchema);

//query
const addFavoriteCoin = (coinObj) => {
  const doc = new Coin(coinObj);
  return doc.save();
};

const getFavoriteCoin = (callback) => {
  Coin.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const deleteFavoriteCoin = (coin, callback) => {
  Coin.deleteOne(coin, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { addFavoriteCoin, getFavoriteCoin, deleteFavoriteCoin};