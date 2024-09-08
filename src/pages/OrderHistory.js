import React, { useEffect, useState } from 'react';
import orderService from '../services/orderService';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');
        console.log('Fetching orders for email:', userEmail); // Log the email

        if (!userEmail) {
          setError('User not logged in. Please log in to view your orders.');
          return;
        }

        const response = await orderService.getUserOrders(userEmail);
        console.log('Fetched orders:', response); // Log the orders fetched
        setOrders(response); // Update orders from response
      } catch (err) {
        console.error(err);
        setError(err.response ? err.response.data.message : 'Failed to fetch orders');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Order History</h1>
      {error && <p className="text-red-600">{error}</p>}
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map(order => (
            <li key={order._id} className="border p-4 rounded-md bg-white shadow-sm">
              <h2 className="text-xl font-semibold text-blue-600">Order ID: {order._id}</h2>
              <p className="text-gray-700">Name: {order.name}</p>
              <p className="text-gray-700">Email: {order.email}</p>
              <p className="text-gray-700">Address: {order.address}</p>
              <ul className="list-disc ml-5">
                {order.items.map(item => (
                  <li key={item.product} className="text-gray-600">
                    {item.product} - Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
