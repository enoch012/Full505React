import React from "react";

// 부모 컴포넌트에서 전달받은 데이터를 화면에 출력
function Children2(props) {

  const sendData = () => {
    // 부모 컴포넌트에서 전달 받은 props 객체가 부모 컴포넌트의 state를 수정할 수 있는 setState 함수
    // 부모 컴포넌트에서 전달 받은 함수에 데이터를 전달하면 부모 컴포넌트에 데이터가 전달됨
    props.setData('자식 컴포넌트의 데이터');
  }

  return(
    <div>
      {/* 버튼 클릭 시 sendData 라는 함수를 실행 */}
      <button type={'button'} className={'btn btn-dark'} onClick={sendData}>부모 컴포넌트로 데이터 전달</button>
    </div>
  )
}
export default Children2;