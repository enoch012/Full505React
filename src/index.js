import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from "./App2";
import App from './App';
import reportWebVitals from './reportWebVitals';
import BasicPage from "./bootpractice/BasicPage";
import App4 from "./App4";
import App5 from "./App5";
import App6 from "./App6";
import App7 from "./App7";
import App8 from "./App8";
import App9 from "./App9";
import App10 from "./App10";
import App11 from "./App11";
import App12 from "./App12";
import App13 from "./App13";

const root = ReactDOM.createRoot(document.getElementById('boot'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<App2 />*/}
    {/*<BasicPage />*/}
    {/*<App4 />*/}
    {/*<App5 />*/}
    {/*<App6 />*/}
    {/*<App7 />*/}
    {/*<App8 />*/}
    {/*<App9 theme={'dark'} signedInUser={'노아'}/>*/}
    {/*<App10 theme={'dark'} signedInUser={'사용자'}/>*/}
    {/*<App11 />*/}
    {/*<App12 />*/}
    <App13 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
