import React, { useState, useEffect } from 'react'
import products from '../data/data';

import { Heart } from 'react-bootstrap-icons';

import './Item.css'

const Item = () => {

  const [isClicked, setIsClicked] = useState([]);

  const handleClick = (id) => {

    if (!isClicked.includes(id)) {
      const temporaryVar = [...isClicked, id];
      setIsClicked(temporaryVar);
    } else {
      console.log('Item already clicked!');
    }
  }

  useEffect(() => {
    console.log(isClicked);
  }, [isClicked]);

  return (
    <div className='row d-flex justify-content-center'>
      {
        products.map(product => (
          <div className="col-md-3" key={product.id} >
            <div className="card-sl cardContainer">
              <div className='card-image'>
                <img
                  src={product.imageUrl} />
              </div>
              <div>
                <a className="card-action" href="#"><Heart /></a>
              </div>
              <div className="card-heading">
                {product.name}
              </div>
              <div className="card-text card-description">
                {product.description}
              </div>
              <div className="card-text">
                Price: {product.price}$
              </div>
              <a href="#"
                className="card-button"
                onClick={() => handleClick(product)}>Purchase</a>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Item
