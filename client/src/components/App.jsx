import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm.jsx';
import Coin from './Coin.jsx';
import WatchList from './WatchList.jsx';


const App = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [watched, setWatched] = useState([]);


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);



  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <div className="coin-app">
      <h1 className="coin-text">Coins</h1>
      <div className="coin-search">
        <SearchForm handleChange={handleChange}/>
      </div>
      {filteredCoins.map(coin => (
        <Coin
        key={coin.id}
        name={coin.name}
        image={coin.image}
        symbol={coin.symbol}
        marketcap={coin.market_cap}
        price={coin.current_price}
        priceChange={coin.price_change_percentage_24h}
        volume={coin.total_volume}
        />
      ))}
    <div>
      <WatchList />
    </div>
    </div>
  )
}

export default App;