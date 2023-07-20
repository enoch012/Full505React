import React from 'react';
import Button from "./Button";

function ThemedButton(props) {

  return (
    // 부모 컴포넌트에서 전달한 데이터를 사용하지 않고 자식 컴포넌트를 호출하는데 사용
    <Button theme={props.theme} />
  )
}

export default ThemedButton;