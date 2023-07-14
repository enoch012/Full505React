import React from "react";

// 클래스 컴포넌트
// 생명주기 함수가 존재함
class WelcomeClass extends React.Component {
  // render() 함수를 사용하여 화면을 그려줌
  render() {
    // 함수 컴포넌트와 동일하게 return 키워드에 JSX 문법을 사용하여 화면을 구성
    return (
      <h1>클래스 컴포넌트, 안녕하세요. {this.props.name} 입니다.</h1>
    )
  }
}

export default WelcomeClass;