// src/redux/reducers/productReducer.js
import { GET_PRODUCTS, GET_PRODUCT_DETAILS } from '../types';

const initialState = {
  products: [],
  productDetails: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

export default productReducer;
