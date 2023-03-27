import React from 'react';
import { useSelector } from 'react-redux';
import products from '../data/data';
import Table from 'react-bootstrap/Table';

import {
  BsX,
  BsFillDashSquareFill,
  BsPlusSquareFill,
} from "react-icons/bs";


import './Cart.css'

const Cart = () => {
  const cartItems = useSelector(state => state.cartItems);

  console.log(cartItems)

  return (
    <div>
      <h1 className='cart-h1'>My Cart component</h1>
      <div>
        <Table striped bordered hover>
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
              <tr key={item} className='table-td-container'>
                <td>{index + 1}</td>
                <td className='table-image-container'>
                  <img src={products.find(p => p.id === item).imageUrl} alt={item} className="table-img" />
                </td>
                <td>{products.find(p => p.id === item).name}</td>
                <td>
                  <div>
                    <i className='font-plus'><BsPlusSquareFill /></i>
                    <span>1</span>
                    <i className='font-minus'><BsFillDashSquareFill /></i>
                  </div>
                </td>
                <td>{products.find(p => p.id === item).price} $</td>
                <td><i className='delete-icon'><BsX /></i></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
