import React, {useState} from "react";

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
function LoginControl(props){
  // useState를 사용하여 state 설정
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 클릭 이벤트용 함수들
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  // element 변수 선언, 실제로는 일반 변수
  let button;

  //
  // 조건부 렌더링 연산, state인 isLoggedIn의 값이 true, 혹은 false 일 경우에 따라서 변수 button에 저장되는 컴포넌트가 변경됨.
  if(isLoggedIn){
    // 로그인 상태면
    button = <LoginButton onClick={handleLogoutClick} />
  } else {
    // 로그인 상태가 아니면
    button = <LogoutButton onClick={handleLoginClick} />
  }

  return(
    <div className={'container my-3'}>
      {button}
    </div>
  )
}

export default LoginControl;