import { createSlice } from "@reduxjs/toolkit";
import { fetchAllMda } from "./thunk";

let initialState = {
  mdaList: [],
  mda: {},
  mdaLoading: false,
  mdaError: null,
}


export const mdaSlice = createSlice({
    name: "mda",
    initialState,
    extraReducers: (builder) => {
    builder
      .addCase(fetchAllMda.pending, (state) => {
        state.mdaLoading = true;
      })
      .addCase(fetchAllMda.fulfilled, (state, action) => {
        state.mdaList = action.payload;
        state.mdaLoading = false;
        state.mdaError = null;
      })
      .addCase(fetchAllMda.rejected, (state, action) => {
        state.mdaLoading = false;
        state.mdaError = action.error.message;
      });
  }
  });
  
export default mdaSlice.reducer;