"use client"

import { wrapper } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';

const ReduxProvider = ({ Component, pageProps }) => {
  const store = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading...</div>}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(ReduxProvider);