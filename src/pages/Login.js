// src/pages/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Error state for displaying error messages
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  // Function to validate email format
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      // Attempt to sign in the user
      await signInWithEmailAndPassword(auth, email.trim(), password);
      localStorage.setItem('userEmail', email.trim()); // Save email to localStorage
      setSuccessMessage('Login Successful!'); // Set success message
      setEmail(''); // Clear the email input
      setPassword(''); // Clear the password input
      setError(''); // Clear any previous error message
      
    } catch (error) {
      // Check specific error codes
      if (error.code === 'auth/user-not-found') {
        alert('No account found with this email. Please sign up first.');
      } else if (error.code === 'auth/wrong-password') {
        alert('Incorrect password. Please try again.');
      } else if (error.code === 'auth/invalid-email') {
        alert('Please enter a valid email address.');
      } else {
        console.error('Error logging in:', error.message);
        setError('Please sign up first before logging in.'); // Custom message for invalid credentials
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      {successMessage && <p className="text-green-500">{successMessage}</p>} {/* Display success message */}
      <input
        type="email"
        placeholder="Email"
        value={email} // Set input value to state
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 mb-2 w-80 rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        value={password} // Set input value to state
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-80 rounded-md"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
