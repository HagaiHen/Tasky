import Auth from "./auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { createContext } from "react";
import NavHeader from "@/components/Header/Header";
import { ModalProvider } from "styled-react-modal";

export const appContext = createContext(null);

export default function Home(props) {
  const app = initializeApp(props.firebaseConfig);

  const [user, loading, error] = useAuthState(getAuth(app));

  // getAuth(app).signOut();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (user) {

    return (
        <ModalProvider>
          <NavHeader user={user} /> // this on will hold the current page content and the navigation header
        </ModalProvider>
    );
  }

  return (
    <appContext.Provider value={app}>
      <Auth />
    </appContext.Provider>
  );
}

export const getServerSideProps = async (context) => {
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
