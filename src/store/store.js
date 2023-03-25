import { createStore } from 'redux';

const initialState = {
  clickedItems: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        clickedItems: [...state.clickedItems, action.payload]
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;