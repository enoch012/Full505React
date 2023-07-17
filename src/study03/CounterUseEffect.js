import React, {useEffect, useState} from "react";

function CounterUseEffect(){
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  /* 의존성 배열이 빈 배열일 경우 한번만 실행됨
  * 빈 배열 대신 count가 들어가면 count 값을 title에 같이 로드함
  * useEffect hooks를 사용하여 리액트 생명주기 함수의 기능을 사용함
  * useEffect 사용 시 componentDidUpdate() 함수의 기능을 사용하고자 하면 의존성 배열 부분에 변수를 지정
  * 의존성 배열을 빈 배열로 지정하면 componentDidMount() 함수로 동작 */


  // componentDidMount
  useEffect(()=>{
    setCount2(100);
    console.log('컴포넌트 mount 시 동작');
  }, []); // 한번 실행되고 말게 하고 싶으면 빈 배열을 해두면 된다.(

  // componentDidUpdate
  useEffect(() => {
    document.title = `총 ${count} 번 클릭했습니다.`
    console.log('컴포넌트 update 시 동작');
  }, [count]); // 배열 안에 든 변수 중 하나라도 변동이 있으면 함수 내용을 실행 및 로드한다(DidUpdate)

  // componentWillUnmount
  // useEffect 사용 시 componentWillUnmount() 함수의 기능을 사용하고자 하면 콜백 함수 return 부분에 콜백 함수를 추가하여 사용함
  useEffect(()=>{
    return () => {
      console.log("컴포넌트 unmount 시 동작함");
    }
  }, []);

    return (
      <div className={`container`}>
        <p>총 {count}번 클릭했습니다.</p>
        <button type={'button'} className={'btn btn-primary'} onClick={() => setCount(count + 1)}>클릭</button>
        <div className={'mt-3'}>
          <p>두번째 count의 값 = {count2}</p>
          <button type={'button'} className={'btn btn-dark'} onClick={()=> setCount2(count2 + 10)}>10번 클릭</button>
        </div>
      </div>
    )
}

export default CounterUseEffect;

