import React from "react";
import SetStateClass from "./study03/SetStateClass";
import SetStateFunction from "./study03/SetStateFunction";
import Notification from "./study03/Notification";
import NotificationList from "./study03/NotificationList";
import Counter from "./study03/Counter";
import CounterUseState from "./study03/CounterUseState";
import CounterUseEffect from "./study03/CounterUseEffect";
import VolumeControl from "./study03/VolumeControl";
import TextInputWithFocusButton from "./study03/TextInputWithFocusButton";

function App4() {
  return(
    <div>
      <SetStateClass />
      <br/><hr/><br/>
      <SetStateFunction />
      <br/><hr/><br/>
      <NotificationList />
      <br/><hr/><br/>
      <Counter />
      {/*<br/><hr/><br/>
      <CounterUseState />
      <br/><hr/><br/>
      <CounterUseEffect />*/}
      <br/><hr/><br/>
      <VolumeControl />
      <br/><hr/><br/>
      <TextInputWithFocusButton />
    </div>
  )
}

export default App4;