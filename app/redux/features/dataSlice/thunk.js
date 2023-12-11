import { createAsyncThunk } from "@reduxjs/toolkit";
import {firestore} from '../../../firebase/config' 
import { 
  collection, 
  getDocs,
} from "firebase/firestore";
 
export const fetchAllLga = createAsyncThunk(
  'data/fetchAllLga', 
  async () => {
    const lgaCollection = await getDocs(
      collection(firestore, "states")
    );

    const lgaList = lgaCollection.docs
      .map((doc) => ({id: doc.id, ...doc.data()}));
    return lgaList;
});

export const fetchSalaryGrades = createAsyncThunk(
  'data/salaryGrades', 
  async () => {
    const salaryGrades = await getDocs(
      collection(firestore, "salaryGrades")
    );

    const salaryGradesList = salaryGrades.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }));
    return salaryGradesList;
});

export const fetchQualifications = createAsyncThunk(
  'data/fetchQualifications', 
  async () => {
    const qualifications = await getDocs(
      collection(firestore, "qualifications")
    );

    const qaulificationList = qualifications.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }));
    return qaulificationList;
});