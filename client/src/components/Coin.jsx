import React, {useState} from 'react';

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  const [watched, setWatched] = useState([]);
  const [like, setLike] = useState(false);

  const saveFavCoin = () => {
    if (like) {
      axios.post('/favorite', { name, image, symbol, marketcap, price, priceChange, volume, favorite })
        .then((res) => {
          setWatched((prev) => [...prev, res.data]);
        })
        .catch((err) => { console.log(err); });
    }
  }

  const handleClick = () => {
    console.log('clicked')
    setLike((prev) => !prev);
  }

  return (
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
          {like ? (<i className="fas fa-star coin-far" onClick={handleClick} />) : (<i className="far fa-star coin-far" onClick={handleClick} />)}
        </div>
      </div>
    </div>
  )

}

export default Coin;