import { use } from "react";
import SignIn from "./signin";
import Signup from "./signup";
import { useState } from "react";
import {AUTH_STATES} from "@/utils/consts";
import SignupSession from "./signup_session";

export default function Auth(props) {

  const [state, changeState] = useState(AUTH_STATES.SIGNIN);

  const [[uid, token], setSession] = useState([null, null]);

  const updateState = (newState) => {
    changeState(newState);
  }

  const updateSession = (newUid, newToken) => {
    setSession([newUid, newToken]);
  }

  if (state == AUTH_STATES.SIGNIN) {
    return <SignIn updateState={updateState} />;
  }
  else if (state == AUTH_STATES.SIGNUP) {
    return <Signup updateState={updateState} updateSession={updateSession}/>;
  }
  else if (state == AUTH_STATES.SIGNUP_SESSION) {
    return <SignupSession token={token} uid={uid}/>;
  }
}