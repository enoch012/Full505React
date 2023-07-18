import React from "react";

function WarningBanner(props) {
  // 부모에게서 전달 받은 데이터를 사용하여 조건에 따라 반환 값을 null 혹은 html을 출력
  // 전달 받은 데이터가 있으면 if문 실행 안함, 데이터가 없으면 null을 반환
  if(!props.warning) { // if문의 조건이 false이면 if문 내의 return 값이 아니라 아래의 return 값으로 넘어감
    return null;
  }

  return (
    <h3>경고!</h3>
  );
}

export default WarningBanner;