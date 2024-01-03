import { createAsyncThunk } from "@reduxjs/toolkit";
import {firestore} from '../../../firebase/config' 
import { 
  collection, 
  getDocs,
} from "firebase/firestore";

export const fetchAllMda = createAsyncThunk(
  'data/fetchAllMda', 
  async () => {
    const mdas = await getDocs(
      collection(firestore, "mda")
    );

    const mdaList = mdas.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }));
    return mdaList;
});