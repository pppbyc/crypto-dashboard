const express = require('express');
const cors = require('cors');
const app = express();

const { addFavoriteCoin, getFavoriteCoin, deleteFavoriteCoin } = require('../db/index');

app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));


app.post('/favorite', (req, res) => {
  // console.log(req.body);
  addFavoriteCoin(req.body, (err, results) => {
    if (err) {
      res.sendStatus(400);
    } else {
      console.log('added Fav Coin!')
      res.status(201).send(results);
    }

  });
});

app.get('/favorite', (req, res) => {
  console.log("server get")
  getFavoriteCoin((err, result) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).json(result);
    }

  });
});

app.delete('/favorite', (req, res) => {
  console.log(req.body);
  deleteFavoriteCoin(req.body, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      console.log('deleted Fav Coin!');
      res.sendStatus(202);
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});