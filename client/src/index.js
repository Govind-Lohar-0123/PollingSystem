import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./components/css/common.css";
import { Provider } from 'react-redux';
import store from "./components/Redux/store.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    
  </Provider>
);


