import React from "react";
import Header from "./Header";
import Main from "./Main";

// 문제 1 ) https://www.w3schools.com/bootstrap5/trybs_template1.htm 의 UI를 컴포넌트로 생성하여 작성하세요.
function BasicPage(props) {
  return(
    /*<div>
      <h1>제목이 나오나요</h1>
    </div>*/
    <div>
      <Header />
      <Main />
    </div>

  )
}

export default BasicPage;