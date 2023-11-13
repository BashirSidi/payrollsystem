import api from '../../../utils/axiosSetup';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllMDAs = createAsyncThunk(
    "mda/getAll",
    async ({}, { rejectWithValue }) => {
      const url = '/mdas';
      try {
        const resData = await api.get(url)
        return resData;
      } catch (error) {
        rejectWithValue(error);
      }
    }
  );