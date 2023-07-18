import React, {useEffect, useState} from "react";
import useUserStatus from "./useUserStatus";

// 서버에 있는 사용자의 상태가 현재 온라인인지 오프라인인지
function UserStatus(props) {

  // 커스텀 훅 사용
  const isOnline = useUserStatus(props.user.id);

  // 커스텀 훅 미사용
  /*// isOnline 상태값을 수정 온라인인지 오프라인인지 후에 return으로 반환 (3)
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {

    // 콜백 후 status 동작 (2)
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    // 서버에 접속중인지 확인하는 명령어 - 실행 후, handleStatusChange 콜백(1)
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
  });*/

  //
  if (isOnline === null){
    return '대기중...';
  }

  return isOnline ? '온라인' : '오프라인';
}

export default UserStatus;