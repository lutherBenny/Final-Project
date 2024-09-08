import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { useSelector } from 'react-redux';
import { auth } from '../firebase';  // Import Firebase auth

const Navbar = () => {
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate(); // Initialize useNavigate
  const userEmail = localStorage.getItem('userEmail');  // Get the logged-in user's email

  const handleLogout = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('userEmail');  // Clear user email from localStorage
      navigate('/login');  // Redirect to login page using useNavigate
    }).catch(error => {
      console.error('Error logging out:', error);
    });
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold text-yellow-400">My E-Commerce</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-sm md:text-base hover:text-gray-300">Home</Link></li>
        <li>
          <Link to="/cart" className="text-sm md:text-base hover:text-gray-300">
            Cart ({cart.items.length})
          </Link>
        </li>
        <li><Link to="/orders" className="text-sm md:text-base hover:text-gray-400">Order History</Link></li>
        {userEmail ? (
          <li>
            <button onClick={handleLogout} className="text-sm md:text-base hover:text-gray-300">
              Logout
            </button>
          </li>
        ) : (
          <>
            <li><Link to="/login" className="text-sm md:text-base hover:text-gray-300">Login</Link></li>
            <li><Link to="/signup" className="text-sm md:text-base hover:text-gray-300">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
