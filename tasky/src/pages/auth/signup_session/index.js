import "./styles.css";
import { Stepper, Step } from "react-form-stepper";
import { useState } from "react";

export default function signupSession() {
  return (
    <div className="signup-session">
      <PlaceOrder />
    </div>
  );
}

export const PlaceOrder = () => {
  const [goSteps, setGoSteps] = useState(0);

  return (
    <div>
      <Stepper activeStep={goSteps}>
        <Step onClick={() => setGoSteps(0)} label="LOGIN" />
        <Step onClick={() => setGoSteps(1)} label="DELIVERY" />
        <Step onClick={() => setGoSteps(2)} label="ORDER SUMMERY" />
      </Stepper>
      {goSteps === 0 && (
        <div>
          <div>
            <p>Login</p>
            <input
              className="input_tag"
              placeholder="Enter Email/Mobile number"
            />
          </div>
          <button className="btn" onClick={() => setGoSteps(1)}>
            Next
          </button>
        </div>
      )}
      {goSteps === 1 && (
        <div>
          Addreess
          <button onClick={() => setGoSteps(2)}>Next</button>
        </div>
      )}
      {goSteps === 2 && (
        <div>
          Payment
          <button onClick={() => setGoSteps(3)}>Submit</button>
        </div>
      )}
    </div>
  );
};
