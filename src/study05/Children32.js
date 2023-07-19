import React, {useState} from "react";

// 부모 컴포넌트에서 전달받은 데이터를 화면에 출력
function Children32(props) {

  const recData = props.data;
  const recFunc = props.func;

  const [inputValue, setInputValue] = useState('');
  const changeInput = e => setInputValue(e.target.value)
  const sendData = e => {
    // props.func(inputValue)
    recFunc(inputValue);
  }

  return(
    <div className={'my-3 border border-2 rounded rounded-3 p-3'}>
      <input type="text" className={'form-control'} value={inputValue} onChange={changeInput}/>
      <button type={'button'} className={'btn btn-dark'} onClick={sendData}>데이터 전달</button>
    </div>
  )
}
export default Children32;