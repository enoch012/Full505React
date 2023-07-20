import React, {useState} from 'react';
import Dialog3 from "./Dialog3";

function SignUpDialog(props) {
  // useState를 사용하여 변수 nickName을 state 로 설정
  const [nickName, setNickName] = useState('');

  // 이벤트 발생 시 동작할 콜백함수 선언
  const handleChange = (e) => {
    setNickName(e.target.value);
  }

  const handleSignUp = () => {
    alert(`괜찮으신가요? ${nickName} 님`);
  }

  const handleCheckboxChange = (e) => {
    alert('체크되었습니다.');
  }

  return (
    /* 부모 컴포넌트에서 자식 컴포넌트의 UI를 다양한 방식으로 바꿀 수 있다 */
    <div>
      <Dialog3 title={'고양이 귀여워 프로그램'} message={'닉네임을 입력하세요.'}>
        <input type="text" value={nickName} onChange={handleChange}/>
        <button type={'button'} onClick={handleSignUp} className={'btn btn-dark'}>가입하기</button>
      </Dialog3>

      <Dialog3 title={'책 왕왕 읽기 프로그램'} message={'닉네임을 입력하세요.'}>
        <input type="text" value={nickName} onChange={handleChange}/>
        <label htmlFor="chk" className={'form-label ms-3'}> 성인 여부 :
          <input type={'checkbox'} id={'chk'} className={'form-check-input mx-3'} onChange={handleCheckboxChange} />
        </label>
        <button type={'button'} onClick={handleSignUp} className={'btn btn-dark'}>가입하기</button>
      </Dialog3>
    </div>
  )
}

export default SignUpDialog;