import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  /* StrictMode 애플리케이션 내의 잠재적인 문제를 발견하기 위해 활성화되어있다.
  * 하지만 이는 api나 비동기 통신을 2번씩 불러오게 하기도 한다.
  * 그러나 개발자 모드에서만 활성화 되니 웬만하면 켜두도록 하자. */
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
