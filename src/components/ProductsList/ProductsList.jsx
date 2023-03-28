import React from 'react'
import Item from '../Item/Item'

import { Provider } from 'react-redux';
import store from '../../store/store';

import './ProductList.css'

const ProductsList = () => {
  return (
    <div className='productsList-container'>
      <h1 className='ProductsListh1'>E-Shop Products List</h1>
      <Provider store={store}>
        <Item />
      </Provider>
    </div>
  )
}

export default ProductsList
