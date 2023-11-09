import { createSlice } from "@reduxjs/toolkit";
import { getAllEmployees } from "./thunk";

let initialState = {
  employee: {},
  employeeStatus: "",
  employeeError: null,
}

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllEmployees.pending, (state) => {
      state.employeeStatus = "loading";
    });
    builder.addCase(getAllEmployees.fulfilled, (state, action) => {
      state.employeeStatus = "succeeded";
      state.employee = action.payload;
    });
    builder.addCase(getAllEmployees.rejected, (state, action) => {
      state.employeeStatus = "failed";
      state.employeeError = action.payload;
    });
  }
});

export default employeeSlice.reducer;