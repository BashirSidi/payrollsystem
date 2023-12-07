import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from './features/authSlice';
import employeeReducer from './features/employeeSlice';
import mdaReducer from './features/mdaSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
  mda: mdaReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;
export { store };
