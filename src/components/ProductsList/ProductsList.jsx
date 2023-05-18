import React from 'react'
import Item from '../Item/Item'

import { Provider } from 'react-redux';
import store from '../../store/store';
import { Container } from 'react-bootstrap';

import './ProductList.css'

const ProductsList = () => {
  return (
    <Container>
      <div className='productsList-container'>
        <h1 className='ProductsListh1'>E-Shop Products List</h1>
        <Provider store={store}>
          <Item />
        </Provider>
      </div>
    </Container>
  )
}

export default ProductsList
