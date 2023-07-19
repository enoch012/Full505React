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
import List from "./study05/List";
import NameForm from "./study05/NameForm";
import AttendanceBook from "./study05/AttendanceBook";
import RequestForm from "./study05/RequestForm";
import FruitSelect from "./study05/FruitSelect";
import Reservation from "./study05/Reservation";
import Join from "./study05/Join";
import Parent from "./study05/Parent";
import Parent2 from "./study05/Parent2";
import Parent3 from "./study05/Parent3";
import Calculator from "./study05/Calculator";

function App6() {
  return <div className={'container my-5'}>
    <List/>
    <hr/>
    <AttendanceBook/>
    <hr/>
    <NameForm/>
    <hr/>
    {/*<RequestForm />*/}
    <hr/>
    <FruitSelect/>
    <hr/>
    <Reservation/>
    <hr/>
    <Join/>
    <hr/>
    <Parent/>
    <hr/>
    <Parent2 />
    <hr/>
    <Parent3 />
    <hr/>
    <Calculator />
  </div>
}

export default App6;