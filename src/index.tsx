import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './App';
import { Provider } from 'react-redux';
import store, { persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Opp(){
  return (
    <div>
      Opp
    </div>
)};

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      {/* <Opp /> */}
    </PersistGate>
  </Provider>,
);
