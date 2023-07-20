import React from 'react';
import ThemeButton2 from "./ThemeButton2";

// 부모 컴포넌트에서 호출 시 데이터를 전달한 것이 없기 때문에 props 가 비어있음
function Toolbar2(props) {

  return (
    // 자식 컴포넌트를 호출하는데 전달하는 데이터가 존재하지 않음
    <ThemeButton2 />
  )
}

export default Toolbar2;