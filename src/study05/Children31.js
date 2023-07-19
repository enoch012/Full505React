import React from "react";

// 부모 컴포넌트에서 전달받은 데이터를 화면에 출력
function Children31(props) {
  // 부모 컴포넌트에서 전달 받은 데이터
  const recData = props.data;
  const recFunc = props.func;

  return(
    <div>
      <h3>자식 컴포넌트 1</h3>
      <h4>부모 컴포넌트에서 전달된 데이터 : {recData}</h4>
      {/* 자식 컴포넌트의 버튼 클릭 시 recFunc 함수를 실행 */}
      <button type={'button'} className={'btn btn-outline-dark'} onClick={recFunc}>클릭</button>
    </div>
  )
}
export default Children31;