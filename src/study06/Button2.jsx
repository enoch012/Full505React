import React from 'react';

function Button2(props) {

  return (
    // 부모 컴포넌트에서 전달 된 theme 의 속성 값을 사용함
    // 3개의 전달과정을 거쳐 4번째 전달될 때야 쓰인다.
    <button type="button" className={`btn btn-${props.theme}`} onClick={()=>{
      alert(`사용한 테마 : ${props.theme}`);
    }}>{props.theme} 테마 버튼</button>
  )
}

export default Button2;