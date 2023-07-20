import React from 'react';
import Dialog2 from "./Dialog2";

function WelcomeDialog2(props) {

  return (
    <div>
      <Dialog2 title={'어서오세요'} message={'우리 사이트에 방문한 것을 환영합니다.'}>
      </Dialog2>
      <Dialog2 title={'오류 발생'} message={'오늘 몸살 기운이 있는 것 같습니다.'} />
    </div>
  )
}

export default WelcomeDialog2;