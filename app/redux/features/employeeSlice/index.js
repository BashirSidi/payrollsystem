import { createSlice } from "@reduxjs/toolkit";
import { 
  addEmployee,
  fetchEmployees,
 } from "./thunk";

let initialState = {
  employees: [],
  employee: {},
  loading: false,
  error: null,
}

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(addEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default employeeSlice.reducer;