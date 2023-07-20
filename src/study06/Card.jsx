import React from 'react';

const styles = {
  wrapper : {

  }
}

function Card(props) {
  // ES6의 전개연산법, 구조 분해 할당
  // 부모가 전달한 객체인 props의 내용을 지역 변수로 받아줌
  // title, backgroundColor 은 부모 컴포넌트가 자식 컴포넌트에 props에 속성명을 지정하여 데이터 전달
  // children 은 원래 자식 컴포넌트의 props 에 존재하며, children 에 태그를 추가해서 전달
  const {title, backgroundColor, children} = props;
  return (
    <div style={
      {margin : 8,
      padding : 8,
      borderRadius : 8,
      /* backgroundColor 에 넘어온 값이 없으면 white 를 지정한다는 뜻 */
      backgroundColor : backgroundColor || 'white'}
    }>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  )
}

export default Card;