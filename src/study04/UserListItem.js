import React, {useEffect, useState} from "react";
import useUserStatus from "./useUserStatus";

// 사용자의 상태에 따라 사용자 아이디의 색상을 변경
function UserListItem(props) {

  // 커스텀 훅 사용
  const isOnline = useUserStatus(props.user.id);

  // 커스텀 훅 미사용
  /*// useState 훅 사용
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {

    // 콜백을 받아와 isOnline 상태값 변경 (2)
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }

    // 서버에 접속하여 지정한 사용자가 온라인인지 아닌지 확인하는 로직 실행되면 handleStatusChange 로 콜백(1)
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
  });*/

  return (
    // isOnline 값에 따라 username 의 색깔이 바뀌도록함.
    <li style={{ color : isOnline ? 'green' : 'black'}}>
      {props.user.name}
    </li>
  )
}

export default UserListItem;