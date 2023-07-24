import React from 'react';
import {useLocation, useParams, useSearchParams} from "react-router-dom";

function Profile2(props) {
  // 주소 뒤에 있는 파라미터를 ? 기호를 포함하여 모두 문자열로 그대로 가져옴
  // 사용자가 직접 파싱 작업을 진행해야 함

  const profile = useLocation();
  console.log(`useLocation() 으로 가져온 데이터`);
  console.log(profile);
  const {pathname, search} = profile;
  console.log(pathname);
  console.log(search);

  // 파라미터 값을 자동으로 파싱하여 데이터를 가져옴
  const [params, setParams] = useSearchParams();
  console.log(`useSearchParams()로 가져온 데이터`);
  console.log(params);

  /* 실제 데이터를 출력 시 get 함수를 사용해야 한다.
  useSearchParams 로 가져오면 한글 안 깨짐, useSearchParams 가 이런부분에선 더 편하다 */
  console.log(params.get('username'));
  console.log(params.get('age'));


  return (
    <div>
      <h1>Profile 2 Page</h1>
      <h3>This Page is Blank Page</h3>
      <h3>Parameter1 : {params.get('username')}</h3>
      <h3>Parameter2 : {params.get('age')}</h3>
    </div>
  )
}

export default Profile2;