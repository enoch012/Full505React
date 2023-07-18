import React from "react";

/* 클래스 컴포넌트 이벤트 등록 예시 */
class ToggleClass extends React.Component {

  /* 자바스크립트 클래스의 생성자
  * 생성자 안에 this.변수명 또는 this.메소드명 사용시 클래스의 멤버 변수, 멤버 메소드가 된다. */
  constructor(props) {
    super(props);

    // this의 멤버 변수 등록
    // state 설정, state로 isToggleOn을 설정, 기본값 true
    this.state = { isToggleOn : true }

    // 클릭 이벤트 설정, this 의 멤버 메소드로 등록, bind를 적어줘야 현재 클래스 안의 해당 객체로 인식함
    this.handleClick = this.handleClick.bind(this);

    /* bind() : 자바스크립트의 클래스 함수가 기본적으로 클래스 내부에 등록되지 않음
    * bind() 를 사용핮 않고 this.함수명을 사용 시 글로벌 스코프로 동작하여 웹 문서에서 확인하게 됨
    * 해당 함수가 undefined로 출력됨
    * bind() 를 사용하여 현재 클래스로 등록해야함  */
  }

  // 버튼 클릭 이벤트 발생 시 실행될 메서드
  handleClick() {
    // state로 설정된 변수의 값 변경 시 사용
    // prevState : 이전 설정값
    // 이전 state의 데이터를 가져와서 현재 state의 값으로 변경함
    this.setState(prevState => ({
      isToggleOn : !prevState.isToggleOn // isToggleON 이 이전 상태와 반대가 된도록
    })
    );
  }

  // UI 생성
  render() {
    return(
      /* 클릭 이벤트 발생시 onClick 에서 지정한 함수 실행 */
      <div>
        <button type={'button'} className={'btn btn-primary'} onClick={this.handleClick}>
          {this.state.isToggleOn ? '켜짐' : '꺼짐'}
        </button>
      </div>
    );
  }
}

export default ToggleClass;