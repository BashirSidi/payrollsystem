import { createAsyncThunk } from "@reduxjs/toolkit";
import {firestore} from '../../../firebase/config' 
import { 
  collection, 
  addDoc,
  getDocs,
 } from "firebase/firestore";

export const addEmployee = createAsyncThunk(
  'employees/add', 
  async (employeeData) => {
    const docRef = await addDoc(
      collection(firestore, "employees"), 
      employeeData
    );
    
    const addedEmployee = await docRef.get();
    return { id: docRef.id, ...addedEmployee.data() };
});

export const fetchEmployees = createAsyncThunk(
  'employees/fetchAll', 
  async () => {
    const employeeCollection = await getDocs(
      collection(firestore, "employees")
    );

    const employeeList = employeeCollection.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }));
    return employeeList;
});