import React from 'react';
import { useSelector } from 'react-redux';
import products from '../data/data';
import Table from 'react-bootstrap/Table';

const Cart = () => {
  const cartItems = useSelector(state => state.cartItems);

  console.log(cartItems)

  return (
    <div>
      <h1>My Cart component</h1>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item}>
                <td>{index + 1}</td>
                <td>{products.find(p => p.id === item).name}</td>
                <td>{products.find(p => p.id === item).price}</td>
                <td>@mdo</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
