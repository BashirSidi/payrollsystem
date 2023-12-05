import { createAsyncThunk } from "@reduxjs/toolkit";
import {firestore} from '../../../firebase/config' 

export const addEmployee = createAsyncThunk(
  'employees/add', 
  async (employeeData) => {
    const docRef = await firestore.collection('employees').add(employeeData);
    const addedEmployee = await docRef.get();
    return { id: docRef.id, ...addedEmployee.data() };
});

export const fetchEmployees = createAsyncThunk(
  'employees/fetchAll', 
  async () => {
    const employeeCollection = await firestore.collection('employees').get();
    const employeeList = employeeCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return employeeList;
});