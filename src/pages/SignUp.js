// src/pages/SignUp.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSignUp = async () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password); // Trim whitespace
      const message = 'Sign Up Successful';
      setSuccessMessage(message); // Set success message
     
      setEmail(''); // Clear the email input
      setPassword(''); // Clear the password input
    } catch (error) {
      console.error('Error signing up:', error.message);
      alert('Sign Up Failed: ' + error.message); // Display error message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
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
        onClick={handleSignUp}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
