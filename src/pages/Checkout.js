import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { clearCart } from '../redux/actions/cartActions'; // Adjust import based on your structure

const Checkout = () => {
    const cartItems = useSelector(state => state.cart.items);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if cart is empty
        if (cartItems.length === 0) {
            alert("Your cart is empty. Please add items to your cart before proceeding.");
            return;
        }

        // Prepare order items
        const items = cartItems.map((item) => {
            const productId = item.product._id; // Get product ID
            return {
                product: productId ? productId : null, // Use null if ID is missing
                quantity: item.quantity || 1,
            };
        });

        // Check for any invalid product IDs
        const invalidIds = items.filter(item => item.product === null);
        if (invalidIds.length > 0) {
            console.error("Invalid Product IDs:", invalidIds);
            alert("One or more product IDs are invalid. Please check your cart.");
            return;
        }

        // Prepare order data
        const orderData = {
            name,
            email,
            address,
            items,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/orders', orderData);
            alert("Order placed successfully!");
            // Clear form fields after successful order
            setName('');
            setEmail('');
            setAddress('');
            // Clear the cart
            dispatch(clearCart());
        } catch (error) {
            console.error("Order placement error:", error.response ? error.response.data : error.message);
            alert("Failed to place order. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Place Order
                </button>
            </form>
        </div>
        
    );
};

export default Checkout;
