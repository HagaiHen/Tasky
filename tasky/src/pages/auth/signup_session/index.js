import SignupStepper from "@/pages/auth/signup_session/stepper";

export default function signupSession(props) {
  const { token, uid } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
      className="signup-session"
    >
      <SignupStepper token={token} uid={uid} />
    </div>
  );
}
