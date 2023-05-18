import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Table } from 'react-bootstrap';
import {
  BsFillXCircleFill,
  BsFillDashSquareFill,
  BsPlusSquareFill
} from "react-icons/bs";

import './Cart.css'

const Cart = () => {
  const cartItems = useSelector(state => state.cartItems);

  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const handleClickPlus = (item) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: 1 } });
  };

  const handleClickMinus = (item) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: -1 } });
  };

  return (
    <Container>
    <div>
      <h1 className='cart-h1'>My Cart component</h1>
      {cartItems.length > 0 ? (
        <div>
          <Table bordered hover>
            <thead>
              <tr className='table-dark'>
                <th className='text-center'>#</th>
                <th className='image-th'></th>
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
                  <td className='item-name'>{item.name}</td>
                  <td className='table-quantity'>
                    <div>
                      <i className='font-minus'><BsFillDashSquareFill onClick={() => handleClickMinus(item)} /></i>
                      <span>{item.quantity}</span>
                      <i className='font-plus'><BsPlusSquareFill onClick={() => handleClickPlus(item)} /></i>
                    </div>
                  </td>
                  <td>{item.totalPrice ? item.totalPrice : item.price} $</td>
                  <td>
                    <i
                      className='delete-icon'
                      onClick={() => handleDelete(item.id)}>
                      <BsFillXCircleFill />
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table bordered hover className='total-table'>
            <thead>
              <tr className='table-dark total-table-thead-tr'>
                <th className='text-center'>{cartItems.length > 0 ? `Total: ${cartItems.reduce((total, item) => total + (item.totalPrice ? item.totalPrice : item.price), 0).toFixed(2)} $` : ''}</th>
                <th className='text-center th-Pay'>
                  <a className='table-hyperlink' href="https://www.paypal.com/lt/home">
                    Pay
                  </a>
                </th>
                <th className='text-center th-Reset' onClick={() => dispatch({ type: 'RESET_QUANTITIES' })}>Reset</th>
              </tr>
            </thead>
          </Table>
        </div>
      ) : (
        <div className='empty-cart-message'>
          There are no items in your cart.
        </div>
      )}
    </div>
    </Container>
  );
};

export default Cart; 