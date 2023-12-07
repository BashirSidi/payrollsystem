import { createAsyncThunk } from '@reduxjs/toolkit';
import {auth} from '../../../firebase/config' 
import {  
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';


export const signUp = createAsyncThunk(
  'auth/signUp', 
  async ({ email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Additional logic to save gender to the user profile
    // You can use Firestore for this as well
    return userCredential.user;
});

export const signIn = createAsyncThunk(
  'auth/signIn', 
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
});

export const logOut = createAsyncThunk(
  'auth/signOut', 
  async () => {
     return signOut(auth); 
});