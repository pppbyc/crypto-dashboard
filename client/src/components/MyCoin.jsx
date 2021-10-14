import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyCoin = ({ name, image, symbol, price }) => {

  // useEffect(() => {
  //   fetchFavCoins();
  // }, []);

  return (
    <>


      <div className="coin">
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p className='coin-price'>${price}</p>
      </div>


    </>
  )
}

export default MyCoin;