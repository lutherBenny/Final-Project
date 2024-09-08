import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders';

const getUserOrders = async (email) => {
  const response = await axios.get(API_URL, {
    params: { email },
  });
  return response.data; // Return only the data
};

export default {
  getUserOrders,
};
