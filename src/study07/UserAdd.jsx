import React, {useEffect, useState} from 'react';
import axios from "axios";

function UserAdd(props) {

  const [userInfo, setUserInfo] = useState({
    userId : "",
    userPw : "",
    userName : "",
    userEmail : ""
  });

  const changeUserInfo = (e) => {
    const {value, name} = e.target;
    setUserInfo({
      ...userInfo, // 기존의 객체를 복사
      [name] : value, // id 값을 가진 value로 변경
    });
  }

  const btnUserInsert = () => {
    axios.post('http://localhost:8080/user/add', null, {
      params : {
        userId : userInfo.userId,
        userPw : userInfo.userPw,
        userName : userInfo.userName,
        userEmail : userInfo.userEmail
      }
    })
      .then(res => {
        console.log('POST 비동기 통신 성공');
      })
      .catch(err => {
        console.log(`통신 실패 : ${err}`);
      });
  }


  return (
    <div className={'row'}>
      <div className={'col-7 mx-auto my-4'}>
        <h2>회원 추가</h2>

        <form action="">
          <label htmlFor="user-id" className={'form-label my-2'}> 아이디 :</label>
          <input type="text" id={'user-id'} value={userInfo.userId} name={'userId'} onChange={changeUserInfo} className={'form-control'}/>
          <label htmlFor="user-pw" className={'form-label my-2'}> 비밀번호 :</label>
          <input type="password" id={'user-pw'} name={'userPw'} value={userInfo.userPw} onChange={changeUserInfo} className={'form-control'}/>
          <label htmlFor="user-name" className={'form-label my-2'}> 이름 :</label>
          <input type="text" id={'user-name'} name={'userName'} value={userInfo.userName} onChange={changeUserInfo} className={'form-control'}/>
          <label htmlFor="user-email" className={'form-label my-2'}> 이메일 :</label>
          <input type="email" id={'user-email'} name={'userEmail'} value={userInfo.userEmail} onChange={changeUserInfo} className={'form-control'}/>
          <button type={"submit"} className={'btn btn-dark px-3 my-3'} onClick={btnUserInsert}>회원추가하기</button>
        </form>
      </div>
    </div>
  )
}

export default UserAdd;