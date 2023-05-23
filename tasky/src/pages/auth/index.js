import SignIn from "./signin";
import { initializeApp } from "firebase/app";

export default function Auth(props) {
  // fiebase logic to check user state, for now just display signup page
  const app = initializeApp(props.firebaseConfig);
  return <SignIn enviroment={props} app={app} />;
}

export const getServerSideProps = (context) => {
  return {
    props: {
      firebaseConfig: {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
      },
    },
  };
};
