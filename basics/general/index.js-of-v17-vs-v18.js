import React from 'react';
// just for <= v.17
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// react - v.17
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// react - v.18 
const root = createRoot(document.getElementById('root'))
root.render(<App />)

reportWebVitals();
