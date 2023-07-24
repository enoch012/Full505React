import React, {useEffect, useState} from 'react';
import axios from "axios";

function UserList(props) {

  const [userList, setUserList] = useState([]); // 초기화할 빈 배열을 넣어주어야함

  const userListGet = () => {
    axios.get('http://localhost:8080/user/list')
      .then(res => {
        console.log('비동기 통신에 성공했습니다.');
        /*console.log(res);*/
        console.log(res.data.userList);
        // 불러온 유저 리스트 변수에 저장
        const selectUserList = res.data.userList;
        setUserList(selectUserList);
      })
      .catch(err => {
        console.log("오류 발생 :" + err);
      });
  }

  // 처음 페이지 로드하면서 유저 목록 불러오기
  useEffect(() => {
    userListGet();
  }, []);


  return (
    <div className={'row mx-auto'}>
      <div className={'col-9 mx-auto'}>
        <h1 className={'my-3'}>회원목록</h1>
        {/*<button className={'btn btn-dark p-2'} onClick={userListGet}>통신 버튼</button>*/}

        <table className={'table table-hover text-center'}>
          <thead>
          <tr>
            <td>아이디</td>
            <td>이름</td>
            <td>이메일</td>
          </tr>
          </thead>
          <tbody>
          {
            userList.map(user => {
                return(
                  <tr key={user.index + 1}>
                    <td>{user.userId}</td>
                    <td>{user.userName}</td>
                    <td>{user.userEmail}</td>
                  </tr>
                );
              })
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList;