import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './common.css';
import { BrowserRouter as Router } from 'react-router-dom';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
ReactDOM.render(
    <React.StrictMode>
      <>
        <App />
      </>
    </React.StrictMode>,
    document.getElementById('root')
  );

reportWebVitals();
