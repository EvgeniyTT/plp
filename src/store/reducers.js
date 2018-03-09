import * as db from '../utils/db';
import { createStore } from 'redux';

import {
  FETCH_FILTERS,
  FETCH_PRODUCTS,
  FILTER_COLOR,
  FILTER_CATEGORY,
  FILTER_PRODUCTS
} from './actions';

const initialState= {
  filters: [],
  appliedFilters: [],
  allProducts: [],
  filteredProducts: []
};

export const reducer = (state = initialState, action, storeState) => {
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
 
      let newFilters = state.appliedFilters.find(filter => filter.id == action.filter.id)
      ? state.appliedFilters.map(filter => filter.id == action.filter.id ? action.filter : filter)
      : [ ...state.appliedFilters, action.filter]

      newFilters = newFilters.filter(filter => filter.optionsId.length);

      let filteredProd = newFilters.reduce((products, filter) => 
        products.filter(product => filter.optionsId.includes(product[filter.name]))
      , state.allProducts)

      return {
        ...state,
        appliedFilters: newFilters,
        filteredProducts: filteredProd
      };

    default:
      return state;
  }
};

export default reducer;

export const store = createStore(reducer, initialState);
