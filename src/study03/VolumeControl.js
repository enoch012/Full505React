// 문제 1) 버튼 2개를 생성하고 useState와 useEffect를 사용하여 볼륨값을 조절하는 프로그램을 UI와 이벤트가 동작하도록 작성하세요.
// state 변수명 volume
// volume 초기값 = 0, 기본 설정값 5, 최대값은 10으로 설정

import React, {useEffect, useState} from "react";

function VolumeControl(props) {

  // useState를 사용하여 지정된 state 변수의 값을 변경할 수 있도록 설정
  const [count, setCount] = useState(0);

  // useEffect를 사용하여 의존성 배열에 지정된 변수의 값이 변경되면 콜백함수를 실행
  useEffect(() => {
    document.title = count
  }, [count]);

  return(
    <div className={"container"}>
      <p>현재 count 값은 {count} 입니다.</p>
      <div className={"btn-group mt-3"}>
        {/* 3항연산자로 표현 */}
        <button className={"btn btn-outline-dark"} onClick={()=> count + 1 <= 10 ? setCount(upCount(count)) : stopUp()}>UP</button>
        {/* 따로 구현한 함수 if 문으로 표현 */}
        <button className={"btn btn-outline-dark"} onClick={()=> setCount(downCount(count))}>DOWN</button>
      </div>
    </div>
  )
}

const upCount = (count) => {
  return count +1;
}

const downCount = (count) => {
  if (count>0){
    return count -1;
  } else if(count <= 0){
    alert("count는 0보다 작아질 수 없습니다.");
    return count = 0;
  }
}

const stopUp = () => alert("count가 이미 최대치입니다.");

export default VolumeControl;

