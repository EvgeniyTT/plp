import * as db from '../utils/db';

import {
  FETCH_PRODUCTS,
  FILTER_COLOR,
  FILTER_CATEGORY
} from './actions';

const initialReducer = {
  allProducts: [],
  filteredProducts: []
};

export const reducer = (state = initialReducer, action, storeState) => {
  switch (action.type) {

    case FETCH_PRODUCTS:
    console.log('FETCH_PRODUCTS!!!');
    return {
      ...state,
      allProducts: db.products,
      filteredProducts: db.products
    };

    case FILTER_COLOR:
      return {
        ...state,
        filteredProducts: state.allProducts.filter(product => product.color === action.color)
      };

    case FILTER_CATEGORY:
      return {
        ...state,
        filteredProducts: state.allProducts.filter(product => product.category === action.category)
      };

    // case REQUEST_ALPHABETICAL_PRESCRIPTIONS:
    //   return {
    //     ...state,
    //     isFetching: state.isFetching + 1,
    //     messages: {
    //       ...state.messages,
    //       isShown: false
    //     }
    //   };

    // case RECEIVE_ALPHABETICAL_PRESCRIPTIONS:
    //   return { ...state, isFetching: state.isFetching - 1 };


    default:
      return state;
  }
};

export default reducer;
