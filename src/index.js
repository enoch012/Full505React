import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from "./App2";
import App from './App';
import reportWebVitals from './reportWebVitals';
import BasicPage from "./bootpractice/BasicPage";
import App4 from "./App4";
import App5 from "./App5";

const root = ReactDOM.createRoot(document.getElementById('boot'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<App2 />*/}
    {/*<BasicPage />*/}
    {/*<App4 />*/}
    <App5 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
