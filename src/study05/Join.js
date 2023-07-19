import React, {useState} from "react";

// 문제 1 : 회원 가입 페이지를 작성하세요
// id, 비밀번호, 이름, 성별, email, 휴대전화 정보를 입력 받고 확인 버튼 클릭 시 console 이나 alert 로 결과를 출력하세요.
// id = userId, pw = userPw, gender = userGender, name = userName, email = userEmail, phone = userPhone


function Join(props) {
  const [member, setMember] = useState({
    userId : "",
    userPw : "",
    /*userName : "이름",
    userGender : "성별",
    userEmail : "이메일",
    userPhone : "전화번호"*/
  });

  const {userId, userPw} = member;

  const memberSubmit = (e) => {
    console.log(`
    회원가입 정보
    이름 : ${member.userId}
    비밀번호 : ${member.userPw}
    `);

    e.preventDefault();
  }

  const changeMemberInfo = (e) => {
    const {value, id} = e.target;
    setMember({
      ...member, // 기존의 객체를 복사
      [id] : value, // id 값을 가진 value로 변경
    });
  }

  return (
    <div className={'container my-3'}>
      <form onSubmit={memberSubmit}>
        <label className={'form-label'} htmlFor={'userId'}>아이디</label>
        <input type={'text'} value={member.userId} id={'userId'} onChange={changeMemberInfo}/>
        <label className={'form-label'} htmlFor={'userPw'}>비밀번호</label>
        <input type={'text'} value={member.userPw} id={'userPw'} onChange={changeMemberInfo}/>
        <button type={"submit"} className={'btn btn-dark mx-3'}>회원가입 하기</button>
      </form>
    </div>
  )
}



export default Join;