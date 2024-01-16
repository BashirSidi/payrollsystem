import { createSlice } from "@reduxjs/toolkit";
import { 
  signUp,
  signIn,
  logOut,
 } from "./thunk";

const initialState = {
  user: null,
  loading: false,
  error: null,
  authenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        state.authenticated = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        state.authenticated = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.authenticated = false;
        state.user = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Logout failed';
      });
  },
});

export const { setAuthenticated } = authSlice.actions;

export default authSlice.reducer;