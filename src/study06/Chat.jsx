import React from 'react';

function Chat(props) {

  return (
    <div>
      <h3>오른쪽 화면</h3>
      <p>p태그 다른사람들이 괜찮을거라는데 난 그렇게 생각 안함</p>
      <button className={'btn btn-primary'} onClick={() => {alert('클릭!')}}>확인</button>
    </div>
  )
}

export default Chat;