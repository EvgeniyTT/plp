import * as db from '../utils/db';

import {
  FETCH_FILTERS,
  FETCH_PRODUCTS,
  FILTER_COLOR,
  FILTER_CATEGORY,
  FILTER_PRODUCTS
} from './actions';

const initialReducer = {
  filters: [],
  appliedFilters: [],
  allProducts: [],
  filteredProducts: []
};

export const reducer = (state = initialReducer, action, storeState) => {
  switch (action.type) {

    case FETCH_FILTERS:
      return {
        ...state,
        filters: db.filters
      };

    case FETCH_PRODUCTS:
      return {
        ...state,
        allProducts: db.products,
        filteredProducts: db.products
      };

    case FILTER_PRODUCTS:
      console.log('FILTER_PRODUCTS');
      console.log('action.filter: ', action.filter);

      console.log('state.appliedFilters: ', state.appliedFilters);
      console.log('state.filters: ', state.filters);
      console.log('state.allProducts: ', state.allProducts);
      console.log('state.filteredProducts: ', state.filteredProducts);

      console.log('filters: ', 
            state.appliedFilters.find(filter => filter.id === action.filter.id)
            ? state.appliedFilters.map(filter => filter.id === action.filter.id ? action.filter : filter)
            : [ ...state.appliedFilters, action.filter]
          );
      return {
        ...state,
        appliedFilters: state.appliedFilters.find(filter => filter.id === action.filter.id)
          ? state.appliedFilters.map(filter => filter.id === action.filter.id ? action.filter : filter)
          : [ ...state.appliedFilters, action.filter]
        ,
        filteredProducts: state.appliedFilters.reduce((products, filter) =>
          products.filter(product => product => filter.options.includs(product[filter.name]))
          , state.allProducts)
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
