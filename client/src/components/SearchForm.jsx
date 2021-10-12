import React, { useState, useEffect } from 'react';

const SearchForm = ({handleChange}) => {

  return (
    <div>
      <form>
        <input className="coin-input" type="text" placeholder="Search" onChange={handleChange}/>
      </form>
    </div>
  )
}

export default SearchForm;