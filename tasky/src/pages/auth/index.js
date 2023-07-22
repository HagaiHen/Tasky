import { use } from "react";
import SignIn from "./signin";
import Signup from "./signup";
import { useState } from "react";

export default function Auth(props) {

  const [state, changeState] = useState(true);

  const updateState = () => {
    changeState((prev)=>(!prev))
  }

  if (state) {
    return <SignIn updateState={updateState} />;
  }
  else{
    return <Signup updateState={updateState} />;
  }
}