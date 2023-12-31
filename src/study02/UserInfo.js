import React from "react";
import Avatar from "./Avatar";

function UserInfo(props) {
  return (
    <div className={"user-info"}>
      {/* 컴포넌트 추출 */}
      <Avatar user={props.userData}/>
      {/*<img src={props.author.avatarUri} alt={props.author.name} className={"avatar"}/>*/}
      <div className={'user-info-name'}>{props.userData.name}</div>
    </div>
  )
}

export default UserInfo;