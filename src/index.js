import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Landing } from './Landing';
import { Register } from './Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);
