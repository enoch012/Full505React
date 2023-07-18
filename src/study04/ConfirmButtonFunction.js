import React, {useState} from "react";

function ConfirmButtonFunction(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevState) => !prevState);
  }

  return(
    <div>
      <h3>이벤트 함수 예제 2</h3>
      <button type={'button'} className={'btn btn-dark'} onClick={handleConfirm} disabled={isConfirmed}>
        {isConfirmed ? '확인됨' : '확인하기'}
      </button>
    </div>
  )

}

export default ConfirmButtonFunction;