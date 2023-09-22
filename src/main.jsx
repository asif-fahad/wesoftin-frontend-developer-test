import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store.js';
import router from './routes/routes';
import ContextProviders from './providers/ContextProviders';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProviders>

        <RouterProvider router={router} />

      </ContextProviders>
    </Provider>
  </React.StrictMode>,
)
