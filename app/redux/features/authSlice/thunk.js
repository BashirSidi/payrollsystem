import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {auth} from '../../../firebase/config' 


export const signUp = createAsyncThunk(
  'auth/signUp', 
  async ({ email, password }) => {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    // Additional logic to save gender to the user profile
    // You can use Firestore for this as well
    return userCredential.user;
});

export const signIn = createAsyncThunk(
  'auth/signIn', 
  async ({ email, password }) => {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
});