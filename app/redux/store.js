import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './features/authSlice';
import employeeReducer from './features/employeeSlice';
import mdaReducer from './features/mdaSlice';
import dataReducer from './features/dataSlice'


const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
  mda: mdaReducer,
  data: dataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () => {
  const store = configureStore({ reducer: persistedReducer });
  store.__persistor = persistStore(store);
  return store;
};

export const wrapper = createWrapper(makeStore);
