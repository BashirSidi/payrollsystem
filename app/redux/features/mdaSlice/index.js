import { createSlice } from "@reduxjs/toolkit";
import { getAllMDAs } from "./thunk";

let initialState = {
  mda: {},
  status: "",
  error: null,
}


export const mdaSlice = createSlice({
    name: "mda",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(getAllMDAs.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(getAllMDAs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.mda = action.payload;
      });
      builder.addCase(getAllMDAs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    }
  });
  
  export default mdaSlice.reducer;