import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Helper function to convert price string to a number
  const parsePrice = (price) => {
    if (typeof price === 'string') {
      const cleanedPrice = price.replace(/[^0-9.]/g, ''); // Remove currency symbols and commas
      return parseFloat(cleanedPrice);
    } else if (typeof price === 'number') {
      return price;
    }
    return 0; // Default if price is invalid
  };

  // Helper function to format price in both Rs and $
  const formatPrice = (price) => {
    const inRupees = `Rs.${price.toFixed(2)}`;
    const inDollars = `$${(price / 82).toFixed(2)}`;
    return `${inRupees} / ${inDollars}`;
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.items.reduce((total, item) => {
      const itemPrice = parsePrice(item.product.price);
      if (!isNaN(itemPrice)) {
        return total + itemPrice * item.quantity;
      }
      return total; // Return total as is if itemPrice is NaN
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.items.length > 0 ? (
        cart.items.map(item => {
          const itemPrice = parsePrice(item.product.price);
          return (
            <div key={item.product._id} className="bg-white p-4 mb-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold">{item.product.name}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-600">Price: {formatPrice(itemPrice)}</p>
              <button 
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600 transition duration-300"
                onClick={() => handleRemove(item.product._id)}
              >
                Remove
              </button>
            </div>
          );
        })
      ) : (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
          <p className="font-bold">Your cart is empty.</p>
          <p>Please order your products before proceeding to checkout.</p>
          <Link to="/" className="text-blue-500 hover:underline">Go to Products</Link>
        </div>
      )}

      {cart.items.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-6">
            Total: {formatPrice(totalPrice)}
          </h2>
          <Link 
            to="/checkout" 
            className=" inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
