import {combineReducers, configureStore} from '@reduxjs/toolkit'
import employeeReducer from './features/employeeSlice'

const rootReducer = combineReducers({
  employee: employeeReducer,
})

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;