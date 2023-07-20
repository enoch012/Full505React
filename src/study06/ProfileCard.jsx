import React from 'react';
import Card from "./Card";

function ProfileCard(props) {

  return (
    /* 부모 컴포넌트 ProfileCard 에서 자식 컴포넌트인 Card 를 호출
    * 자식 컴포넌트에 title, backgroundColor 속성에 데이터를 전달
    * 컴포넌트 합성 기법 중 포함 방식을 통해서 자식 컴포넌트에 html 태그를 전달 */
    <div>
      <Card title={'노아'} backgroundColor={'#ddd'}>
        <p>안녕하세요. {'노아'} 입니다.</p>
      </Card>
      <Card title={'노아'} backgroundColor={'pink'}>
        <p>안녕하세요. {'노아'} 입니다.</p>
      </Card>
      <Card title={'노아'}>
        <p>안녕하세요. {'노아'} 입니다.</p>
      </Card>
    </div>
  )
}

export default ProfileCard;