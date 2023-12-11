import { createSlice } from "@reduxjs/toolkit";
import { 
  fetchAllLga,
  fetchSalaryGrades,
  fetchQualifications,
} from "./thunk";
 
let initialState = {
  // lga
  lgaList: [],
  lga: {},
  lgaLoading: false,
  lgaError: null,
  // salaryGrade
  salaryGradeList: [],
  salaryGrade: {},
  salaryGradeLoading: false,
  salaryGradeError: null,
  // qaulification
  qualificationList: [],
  qualification: {},
  qualificationLoading: false,
  qualificationError: null,
}

export const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllLga.pending, (state) => {
        state.lgaLoading = true;
      })
      .addCase(fetchAllLga.fulfilled, (state, action) => {
        state.lgaList = action.payload;
        state.lgaLoading = false;
        state.lgaError = null;
      })
      .addCase(fetchAllLga.rejected, (state, action) => {
        state.lgaLoading = false;
        state.lgaError = action.error.message;
      });

    builder
      .addCase(fetchSalaryGrades.pending, (state) => {
        state.salaryGradeLoading = true;
      })
      .addCase(fetchSalaryGrades.fulfilled, (state, action) => {
        state.salaryGradeList = action.payload;
        state.salaryGradeLoading = false;
        state.salaryGradeError = null;
      })
      .addCase(fetchSalaryGrades.rejected, (state, action) => {
        state.salaryGradeLoading = false;
        state.salaryGradeError = action.error.message;
      });
    
    builder
      .addCase(fetchQualifications.pending, (state) => {
        state.qualificationLoading = true;
      })
      .addCase(fetchQualifications.fulfilled, (state, action) => {
        state.qualificationList = action.payload;
        state.qualificationLoading = false;
        state.qualificationError = null;
      })
      .addCase(fetchQualifications.rejected, (state, action) => {
        state.qualificationLoading = false;
        state.qualificationError = action.error.message;
      });
  }
});

export default dataSlice.reducer;

