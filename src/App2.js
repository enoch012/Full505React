import React from "react";
import WelcomeFunc from "./study02/WelcomeFunc";
import WelcomeClass from "./study02/WelcomeClass";
import Comment from "./study02/Comment";
import Comment2 from "./study02/Comment2";
import ReplyList from "./study02/ReplyList";
import BootstrapCDN from "./study02/BootstrapCDN";
import BootstrapReact from "./study02/BootstrapReact";

// 자바스크립트 object 타입 변수
const data = {
  avatarUri : 'https://i.namu.wiki/i/82k9y2UqtCgEpe0jwPHJJ_kkAkP2G47TDcyzYyHi6IkgOxJcM7sY4IW3XCi8LYYCrUZ5TmppE26X-DnPFxZv2g.webp',
  name: '메인쿤'
}

function App2(props) {
  return (
    <div className={""}>
      {/* 컴포넌트 합성 */}
      <h1>함수 컴포넌트 사용</h1>
      <WelcomeFunc name={"노아"}/>
      <hr/>
      <h1>클래스 컴포넌트 사용</h1>
      <WelcomeClass name={"유다"}/>
      <hr/>
      {/*
      자식 컴포넌트 Comment 호출
      속성 author, text, date 를 전달
      new Date() : 현재 시간을 그대로 전달
      */}
      <Comment author={data} text={'고양이는 귀여워'} date={new Date()} />
      <br />
      {/*<Comment2 userData={data} text={'컴포넌트 추출 해보기'} date={new Date()} />*/}

      <br/><hr/><br/>

      <ReplyList />

      <br/><hr/><br/>

      <BootstrapCDN />

      <br/><hr/><br/>

      <BootstrapReact />
    </div>
  )
}

export default App2;