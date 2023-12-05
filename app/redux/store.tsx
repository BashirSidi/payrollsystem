import {combineReducers, configureStore} from '@reduxjs/toolkit'

import authReducer from './features/authSlice'
import employeeReducer from './features/employeeSlice'
import mdaReducer from './features/mdaSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
  mda: mdaReducer,
})

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;