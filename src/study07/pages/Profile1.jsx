import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

function Profile1(props) {

  // useParams() 훅을 사용하여 파라미터로 전달된 데이터를 모두 가져옴
  const profile = useParams();

  const navi = useNavigate();

  const goPrev = () => { navi(-1); }
  const goNext = () => { navi(1); }
  const goAbout = () => { navi('/pages/about'); }

  return (
    <div>
      <h1>Profile 1 Page</h1>
      <h3>This Page is Blank Page</h3>
      <h3>Parameter1 : {profile.username}</h3>
      <h3>Parameter2 : {profile.age}</h3>
      <button type={'button'} className={'btn btn-primary me-3'} onClick={goPrev}>이전페이지</button>
      <button type={'button'} className={'btn btn-primary me-3'} onClick={goNext}>다음페이지</button>
      <button type={'button'} className={'btn btn-primary'} onClick={goAbout}>about 페이지</button>
    </div>
  )
}

export default Profile1;