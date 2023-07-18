// 커스텀 훅 이름은 소문자로 시작한다
import {useState, useEffect} from "react";

// 커스텀 훅 생성하기
function useUserStatus(userId) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscribeUserStatus(userId, handleStatusChange);
  });

  return isOnline;
}

export default useUserStatus;