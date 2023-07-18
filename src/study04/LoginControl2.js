import React, {useState} from "react";
import Greeting from "./Greeting";
import * as PropTypes from "prop-types";

function LoginButton(props) {
  return (
    <button type={'button'} className={'btn btn-dark'} onClick={props.onClick}>로그인</button>
  );
}

function LogoutButton(props) {
  return (
    <button type={'button'} className={'btn btn-dark'} onClick={props.onClick}>로그아웃</button>
  )
}


/* 부모 컴포넌트 */
function LoginControl2(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className={'container my-3'}>
      <Greeting isLoggedIn={isLoggedIn} />
      { // 3항연산자로 if else문 표현
        isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} />
      }
    </div>
  );
}

export default LoginControl2;