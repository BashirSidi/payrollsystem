import { createAsyncThunk } from "@reduxjs/toolkit";
import {firestore} from '../../../firebase/config' 
import { 
  collection, 
  addDoc,
  getDocs,
  doc,
  getDoc,
 } from "firebase/firestore";
import { toast } from "react-toastify";

export const addEmployee = createAsyncThunk(
  'employees/add', 
  async (employeeData) => {
    const docRef = await addDoc(
      collection(firestore, "employees"), 
      employeeData
    );

    //let get lga base on id
    const lgaDocRef = doc(firestore, "states", employeeData.lga);
    const lgaDocSnap = await getDoc(lgaDocRef);
    if(!lgaDocSnap.exists()) toast.error("Local goverment not found!");

    //get qualification by id
    const qualificationDocRef = doc(firestore, "qualifications", employeeData.qualification);
    const qualificationDocSnap = await getDoc(qualificationDocRef);
    if(!qualificationDocSnap.exists()) toast.error("Qualification not found!");


    const addedEmployee = await docRef.get();
    return { 
      id: docRef.id,
      ...addedEmployee.data(),
      lga: lgaDocSnap.data(),
      qualification: qualificationDocSnap.data()
    };
});

export const fetchEmployees = createAsyncThunk(
  'employees/fetchAll', 
  async () => {
    const employeeCollection = await getDocs(
      collection(firestore, "employees")
    );

    const employees = [];

    for(const doc of employeeCollection.docs) {
      const employeeData = doc.data();

      //retrieve  lga base on id
      const lgaDocRef = doc(firestore, "states", employeeData.lga);
      const lgaDocSnap = await getDoc(lgaDocRef);

      //retrieve qualification by id
      const qualificationDocRef = doc(firestore, "qualifications", employeeData.qualification);
      const qualificationDocSnap = await getDoc(qualificationDocRef);

        employees.push({
          id: doc.id,
          ...doc.data(),
          lga: lgaDocSnap.data(),
          qualification: qualificationDocSnap.data()
        });
    }

    return employees;
});