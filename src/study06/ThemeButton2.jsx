import React from 'react';
import Button from "./Button";
import ThemeContext from "./ThemeContext"; // 이거 있어야함 중요!

function ThemeButton2(props) {

  return (
    // Context 의 Consumer 를 통해서 Context 에 저장된 데이터를 가져옴
    <ThemeContext.Consumer>
      {/* 가져온 데이터를 자식 컴포넌트에 전달함 */}
      { value => <Button theme={value} /> }
    </ThemeContext.Consumer>
  )
}

export default ThemeButton2;