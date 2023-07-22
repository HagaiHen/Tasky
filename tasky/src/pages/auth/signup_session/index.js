import { useRouter } from "next/router";
import SignupStepper from "@/pages/auth/signup_session/stepper";


export default function signupSession() {
  const router = useRouter();
  const { token, uid } = router.query;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className="signup-session">
      <SignupStepper token={token} uid={uid}/>
    </div>
  );
}


