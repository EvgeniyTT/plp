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

      newFilters = newFilters.filter(filter => filter.selectedOptionsId.length); 



      let filteredProd = newFilters.reduce((products, filter) => {
        if (filter.case === '1-1') {
          return products.filter(product => filter.selectedOptionsId.includes(product[filter.prop]))
        } else if (filter.case === '1-many') {
          // return products.filter(product => product[filter.arr].some(item => filter.selectedOptionsId.includes(item[filter.prop])))
          let filtered = [];
          products.forEach(product => {
            filter.selectedOptionsId.forEach(option => {
              if (product[filter.arr].find(item => item[filter.prop] === option))
                filtered.push({ ...product, selectedColorId: option })
            })
          })
          return filtered;
        }
      }
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
