import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../utils/axiosSetup';

export const getAllEmployees = createAsyncThunk(
  "employee/getAll",
  async ({}, { rejectWithValue }) => {
    const url = '/employees';
    try {
      const resData = await api.get(url)
      return resData;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);