import React from "react";

function formatDate(date) {
  return date.toLocaleString();
}
/*
* 부모 컴포넌트에서 전달받은 데이터가 props(Object 타입)에 저장됨
* */
function Comment(props) {
  return (
    <div className={"comment"}>
      <div className={"user-info"}>
        <img src={props.author.avatarUri} alt={props.author.name} className={"avatar"}/>
        <div className={'user-info-name'}>{props.author.name}</div>
      </div>
      <div className={'comment-text'}>{props.text}</div>
      {/* formatDate() 함수를 실행 */}
      <div className={'comment-date'}>{formatDate(props.date)}</div>
    </div>
  )
}

export default Comment;