import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
 <BrowserRouter>
 <RouterCustom/>
 </BrowserRouter>
);
reportWebVitals();
