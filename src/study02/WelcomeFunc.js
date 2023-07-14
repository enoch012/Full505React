import React from "react";

// 함수 컴포넌트
// 생명주기 메소드가 없음
// 필요시 Hooks를 사용하여 생명주기 메소드의 기능을 하게 함
// 생명주기 메소드를 사용하여 필요한 작업을 진행할 수 있음
function WelcomeFunc(props) {
  // render() 함수가 없음, return 키워드에 JSX 문법을 사용하여 화면을 구성
  return (
    <h1>함수 컴포넌트 사용, 안녕하세요. {props.name} 입니다.</h1>
  )
}

export default WelcomeFunc;