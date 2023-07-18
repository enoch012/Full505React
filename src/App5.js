import React from "react";
import Accommodate from "./study04/Accommodate";
import ToggleClass from "./study04/ToggleClass";
import ToggleFunction from "./study04/ToggleFunction";
import MyButton from "./study04/MyButton";
import ConfirmButtonClass from "./study04/ConfirmButtonClass";
import ConfirmButtonFunction from "./study04/ConfirmButtonFunction";
import Greeting from "./study04/Greeting";
import LoginControl from "./study04/LoginControl";
import MailBox from "./study04/MailBox";
import LoginControl2 from "./study04/LoginControl2";
import MainPage from "./study04/MainPage";
import Toolbar from "./study04/Toolbar";
import LandingPage from "./study04/LandingPage";

function App5() {
  return (
    <div className={'container mt-4'}>
      <Accommodate/>
      <hr/>
      <ToggleClass/>
      <hr/>
      <ToggleFunction/>
      <hr/>
      <MyButton/>
      <hr/>
      <ConfirmButtonClass/>
      <hr/>
      <ConfirmButtonFunction/>
      <hr/>
      <Greeting isLoggedIn={true}/>
      <hr/>
      <LoginControl/>
      <hr/>
      <MailBox unreadMessages={0}/>
      <MailBox unreadMessages={34}/>
      <hr/>
      <LoginControl2 />
      <hr/>
      <MainPage />
      <hr />
      <LandingPage />
      <br/><br/><br/>
    </div>
  )
}

export default App5;