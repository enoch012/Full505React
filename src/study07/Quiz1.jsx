import React from 'react';
import UserList from "./UserList";
import UserAdd from "./UserAdd";

// 문제 1 : axios 를 사용하여 회원 정보 목록을 출력하는 페이지를 작성하세요
// 화면 로드 시 바로 회원 목록 정보를 가져와야 함 (useEffect 사용)
// 문제 2 : 동일한 페이지에서 axios를 사용하여 사용자 를 추가하는 기능을 만들어보세요
// db의 user table 사용해보세용
function Quiz1(props) {

  return (
    <div className={'container my-4'}>
      <UserList />
      <UserAdd />
    </div>
  )
}

export default Quiz1;