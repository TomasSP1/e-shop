import { createStore } from 'redux';

const initialState = {
  cartItems: [],
  total: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cartItems.some(item => item.id === action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    case 'UPDATE_QUANTITY':
      const { id, quantity } = action.payload;
      const productToUpdate = state.cartItems.find(item => item.id === id);
      const updatedQuantity = productToUpdate.quantity + quantity;
      if (updatedQuantity > productToUpdate.countInStock || updatedQuantity < 1) {
        return state;
      } else {
        const updatedCartItems = state.cartItems.map(item =>
          item.id === id ? { ...item, quantity: updatedQuantity, totalPrice: item.price * updatedQuantity } : item
        );
        const total = updatedCartItems.reduce((acc, item) => acc + item.totalPrice, 0);
        return {
          ...state,
          cartItems: updatedCartItems,
          total
        };
      }
      case 'RESET_QUANTITIES':
      const updatedCartItems = state.cartItems.map(item =>
        ({ ...item, quantity: 1, totalPrice: item.price })
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        total: updatedCartItems.reduce((acc, item) => acc + item.totalPrice, 0)
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store