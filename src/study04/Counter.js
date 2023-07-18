import React from "react";

function Counter(props) {
  const count = 0;

  return (
    <div className={'container'}>
      {
        count // 0은 false, 숫자형 false 값은 출력이 되어버린다.
        &&
        <h2>현재 카운트 : ${count} </h2>
      }
    </div>
  );
}

export default Counter;