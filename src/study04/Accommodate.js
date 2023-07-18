import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";

// 최대 값 설정
const MAX_CAPACITY = 10;

function Accommodate(props) {
  // useState 사용
  const [isFull, setIsFull] = useState(false);
  // 커스텀 훅 사용
  const [count, increaseCount, decreaseCount] = useCounter(0);
  // useCounter에서 return 된 값들을 변수 배열에 순서대로 할당 (ES6 문법)
  // const [count, increaseCount, decreaseCount] = [count, incrementCount, decrementCount];

  // useEffect hook 사용, 무조건 화면 재렌더링
  useEffect(() => {
    console.log("--------------------------------");
    console.log("useEffect() 호출!!");
    console.log(`isFull : ${isFull}`);
  }); // 한번만 실행하고 싶으면 뒤에 빈 배열을 붙이면 된다.

  // 의존성 배열에 지정한 count의 값이 변경시 실행
  // useEffect hook 사용
  useEffect(() => {
    // 변수 isFull의 값을 수정하기 위한 setState
    // 변수 count의 값이 MAX_CAPACITY의 값과 같으면 true, 아니면 false
    setIsFull(count >= MAX_CAPACITY);
    console.log(`현재 count값 : ${count}`); // 현재 count 값 출력
  }, [count]);

  return (
    <div className={'container p-3'}>
      <p>
        {`총 ${count}명 수용했습니다.`}
      </p>
      <div className={'btn-group'}>
        <button type={"button"} className={"btn btn-dark"} onClick={increaseCount} disabled={isFull}>입장</button>
        <button type={"button"} className={"btn btn-outline-dark"} onClick={decreaseCount}>퇴장</button>
      </div>

      {/* 모두 true일 때 p 태그가 그려진다 후자는 항상 true이므로 isFull이 true가 되면 출력된다.*/}
      {isFull && <p className={'text-danger'}>정원이 가득 찼습니다.</p>}
    </div>
  )

}

export default Accommodate;