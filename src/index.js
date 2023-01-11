import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Landing } from './Landing';
import { Register } from './Register';
import {
  BrowserRouter as Router
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Landing />
    </Router>

  </React.StrictMode>
);
