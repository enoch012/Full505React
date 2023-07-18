import React, {useState} from "react";

function ToggleFunction(props) {
  const [isToggleOn, setIsToggleOn] = useState(true);

  /*function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }*/

  const handleClick = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  return(
    <button type={'button'} className={'btn btn-outline-dark'} onClick={handleClick}>
      { isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  )
}

export default ToggleFunction;