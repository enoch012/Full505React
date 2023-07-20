import React from "react";
import WelcomeDialog from "./study06/WelcomeDialog";
import SplitPane from "./study06/SplitPane";
import Contacts from "./study06/Contacts";
import Chat from "./study06/Chat";
import WelcomeDialog2 from "./study06/WelcomeDialog2";
import SignUpDialog from "./study06/SignUpDialog";
import ProfileCard from "./study06/ProfileCard";
import Toolbar from "./study06/Toolbar";

function App7() {

  return <div className={'container my-5'}>
    <WelcomeDialog /><hr/>
    {/* 부모 컴포넌트인 App07에서 자식 컴포넌트인 SplitPane 을 호출 */}
    {/* 자식 컴포넌트 호출 시 속성 left, right 에 다른 자식 컴포넌트를 전달함 */}
    <SplitPane left={<Contacts />} right={<Chat />}/> <hr/>
    <WelcomeDialog2 /><hr/>
    <SignUpDialog /><hr/>
    <ProfileCard /><hr />
    {/* 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하면서 호출 */}
    <Toolbar theme={'dark'}/> <Toolbar theme={'outline-dark'}/><hr />
    {/* 이후 App8에서 이어서 했씁니당.*/}
  </div>
}

export default App7;