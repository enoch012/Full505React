import React from "react";
import Avatar from "./Avatar"
import UserInfo from "./UserInfo";

function formatDate(date) {
  return date.toLocaleString();
}
/*
* 부모 컴포넌트에서 전달받은 데이터가 props(Object 타입)에 저장됨
* */
function Comment2(props) {
  return (
    <div className={"comment"}>
      {/* 컴포넌트 추출을 하여 간소화된 형태의 태그로 UI를 구성할 수 있음*/}
      <UserInfo userData={props.author}/>

      {/*<div className={"user-info"}>
         컴포넌트 추출
        <Avatar user={props.author}/>
        <img src={props.author.avatarUri} alt={props.author.name} className={"avatar"}/>
        <div className={'user-info-name'}>{props.author.name}</div>
      </div>*/}
      <div className={'comment-text'}>{props.text}</div>
      {/* formatDate() 함수를 실행 */}
      <div className={'comment-date'}>{formatDate(props.date)}</div>
    </div>
  )
}

export default Comment2;