
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from 'react-bootstrap/Table';

import {
  BsFillXCircleFill,
  BsFillDashSquareFill,
  BsPlusSquareFill,
} from "react-icons/bs";


import './Cart.css'

const Cart = () => {

  const cartItems = useSelector(state => state.cartItems);
  const initialQuantities = cartItems.reduce((quantities, item) => {
    quantities[item.id] = 1;
    return quantities;
  }, {});
  const [quantities, setQuantities] = useState(initialQuantities);


  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const handleClickPlus = (item) => {
    const currentQuantity = quantities[item.id] || 0;
    if (currentQuantity < item.countInStock) {
      setQuantities({
        ...quantities,
        [item.id]: currentQuantity + 1
      });
    }
  };

  const handleClickMinus = (item) => {
    const currentQuantity = quantities[item.id] || 0;
    if (currentQuantity > 1) {
      setQuantities({
        ...quantities,
        [item.id]: currentQuantity - 1
      });
    }
  };


  return (
    <div>
      <h1 className='cart-h1'>My Cart component</h1>
      <div>
        <Table bordered hover>
          <thead>
            <tr className='table-dark'>
              <th className='text-center'>#</th>
              <th></th>
              <th className='text-center'>Name</th>
              <th className='text-center'>Quantity</th>
              <th className='text-center'>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id} className='table-td-container'>
                <td>{index + 1}</td>
                <td className='table-image-container'>
                  <img src={item.imageUrl} alt={item} className="table-img" />
                </td>
                <td>{item.name}</td>
                <td>
                  <div>
                    <i className='font-minus'><BsFillDashSquareFill onClick={() => handleClickMinus(item)} /></i>
                    <span>{quantities[item.id] || 1}</span>
                    <i className='font-plus'><BsPlusSquareFill onClick={() => handleClickPlus(item)} /></i>
                  </div>
                </td>
                <td>{item.price} $</td>
                <td>
                  <i
                    className='delete-icon'
                    onClick={() => handleDelete(item)}>
                    <BsFillXCircleFill />
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
