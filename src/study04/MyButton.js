import React from "react";

function MyButton(props) {

  // 이벤트 발생 시 실행할 함수
  // 매개변수로 2개의 데이터를 받음
  const handleDelete = (id, event) => {
    // 전달받은 이벤트에 target 속성을 사용 시 이벤트가 발생된 html 태그를 알려줌 
    console.log(id, event.target);
  }

  // 함수 컴포넌트에서 이벤트 발생 시 실행할 함수에 매개변수를 전달하고자 할 경우 이벤트 속성값에 콜백함수를 지정 및
  // 콜백 함수에서 호출할 함수에 매개변수를 입력하여 전달함
  return (
    <div>
      <h3>함수 이벤트 예제</h3>
      <button type={'button'} className={'btn btn-dark'} onClick={
        /* 변수 event : 이벤트를 발생시킨 this 태그를 전달하기 위해
        * onclick 속성에 콜백함수 설정 시 매개변수를 지정하면 이벤트를 발생시킨 html 태그가 전달됨 */
        (event) => handleDelete(10, event)
      }>
        삭제하기
      </button>
      <button type={'button'} className={'btn btn-dark'} onClick={
        () => console.log('이벤트 발생')
      }>삭제하기2</button>
    </div>
  )
}

export default MyButton;