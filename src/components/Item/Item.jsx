import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import products from '../../data/data';
import { Heart } from 'react-bootstrap-icons';
import './Item.css';

const Item = () => {
  const dispatch = useDispatch();
  const [clickedItems, setClickedItems] = useState([]);

  const handleClick = (product) => {
    if (!clickedItems.includes(product)) {
      setClickedItems([...clickedItems, product]);
      dispatch({ type: 'ADD_TO_CART', payload: product });
    } else {
      console.log('Item already clicked!');
    }
  };

  return (
    <div className='row d-flex justify-content-center'>
      {products.map(product => (
        <div className="col-md-3" key={product.id}>
          <div className="card-sl cardContainer">
            <div className='card-image'>
              <img src={product.imageUrl} />
            </div>
            <div>
              <a className="card-action" href="#"><Heart /></a>
            </div>
            <div className="card-heading">{product.name}</div>
            <div className="card-text card-description">
              {product.description}
            </div>
            <div className="card-text">Price: {product.price} $</div>
            <a href="#" className="card-button" onClick={() => handleClick(product)}>
              Purchase
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;