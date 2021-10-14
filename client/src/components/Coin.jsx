import React, { useState } from 'react';
import axios from 'axios';


const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {

  const [favorite, setFav] = useState(false);

  const saveFavCoin = () => {
    axios.post('/favorite', { name, image, symbol, price, favorite:true })
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => { console.log(err); });

    // setLike((prev) => !prev);
  }

  const deleteFavCoin = () => {
    axios.delete('/favorite', { name, image, symbol, favorite })
      .then((res) => {

      })
      .catch((err) => { console.log(err); });
  }

  const handleClick = () => {
    console.log('clicked');
    setFav(true);
    saveFavCoin();
  }

  const handleUnClick = () => {
    console.log('clicked');
    setFav(false);
    deleteFavCoin();
  }

  return (
    <>
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>
          {priceChange < 0 ?
            (<p className="coin-percent red">{priceChange.toFixed(2)}%</p>)
            :
            (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
          }
          <p className="coin-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>
          {favorite ? (<i className="fas fa-star coin-far" onClick={handleUnClick} />)
          :
          (<i className="far fa-star coin-far" onClick={handleClick} />)}
        </div>
      </div>
    </div>
    </>
  )

}

export default Coin;