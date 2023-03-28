import { createStore } from 'redux';

const initialState = {
  cartItems: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cartItems.includes(action.payload)) {
        return state;
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item !== action.payload)
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;