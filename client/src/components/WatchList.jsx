import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyCoin from './MyCoin.jsx';

const WatchList = ({coins}) => {
  const [watchedCoins, setWatched] = useState([]);

  const fetchFavCoins = () => {
    axios.get('/favorite')
      .then((res) => {
        console.log(res.data);
        setWatched(res.data);
      })
      .catch((err) => { console.log(err); });
  }

  const handleClick = () => {
    fetchFavCoins();
  }

  return (
    <div>
    <h3 onClick={handleClick} className="wallet-text">My Wallet</h3>

      {watchedCoins.map((coin, id) => (
        <MyCoin key={id} name={coin.name} price={coin.price} image={coin.image}/>
      ))}

    </div>
  )
}

export default WatchList;