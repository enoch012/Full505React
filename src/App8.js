import React from "react";
import Toolbar2 from "./study06/Toolbar2";
import ThemeContext from "./study06/ThemeContext";

/*const ThemeContext = React.createContext('light');

function Toolbar2(props) {
  return(
    <ThemeContext.Consumer>
      {value => <ThemeButton2 theme={value} />}
    </ThemeContext.Consumer>
  )
}

function ThemeButton2(props) {
  return (
    <ThemeContext.Consumer>
      {value => <Button2 theme={value} />}
    </ThemeContext.Consumer>
  );
}

function Button2(props) {
  return (
    <button className={`btn btn-${props.theme}`} onClick={()=> alert(props.theme)}>
      {props.theme}
    </button>
  )
}*/

function App8(props) {
  return(
    /* Context 의 Provider를 통해 데이터를 전달함
    * context 를 통해 값을 넘기지만 실제로 직계 자손 컴포넌트는 해당 데이터를 사용하지 않음
    * 여러 단계 아래의 자손 컴포넌트에서 해당 데이터를 사용함 */
    <div className={'container my-4'}>
      <ThemeContext.Provider value={'info'}>
        {/* 자식 컴포넌트인 Toolbar2 에는 전달한 데이터가 따로 없음 */}
        <Toolbar2 />
      </ThemeContext.Provider>
    </div>

    /*<div className={'container my-4'}>
      <ThemeContext.Provider value={'danger'}>
        <Toolbar2 />
      </ThemeContext.Provider>
    </div>*/
  )
}

export default App8;