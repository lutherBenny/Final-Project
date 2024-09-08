// src/services/productService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const getAllProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

export default {
  getAllProducts,
  getProductById,
};
