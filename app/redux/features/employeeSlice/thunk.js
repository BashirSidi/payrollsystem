import api from '../../../utils/axiosSetup';
import { createAsyncThunk } from "@reduxjs/toolkit";

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