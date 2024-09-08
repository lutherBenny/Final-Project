// src/redux/actions/productActions.js
import productService from '../../services/productService';
import { GET_PRODUCTS, GET_PRODUCT_DETAILS } from '../types';

export const getProducts = () => async (dispatch) => {
  const products = await productService.getAllProducts();
  dispatch({ type: GET_PRODUCTS, payload: products });
};

export const getProductDetails = (id) => async (dispatch) => {
  const product = await productService.getProductById(id);
  dispatch({ type: GET_PRODUCT_DETAILS, payload: product });
};
