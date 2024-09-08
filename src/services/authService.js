// src/services/authService.js
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const logout = async () => {
  return await signOut(auth);
};

export default {
  signUp,
  login,
  logout,
};
