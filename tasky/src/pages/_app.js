import Auth from "./auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { createContext } from "react";
import NavHeader from "@/components/Header/Header";
import { ModalProvider } from "styled-react-modal";
import "../styles/globals.css";
export const appContext = createContext(null);

export default function MyApp(props) {
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
      <appContext.Provider value={app}>
        <ModalProvider>
          <NavHeader user={user} /> // this on will hold the current page content
          and navigation header
        </ModalProvider>
      </appContext.Provider>
      
    );
  }

  return (
    <appContext.Provider value={app}>
      <Auth />
    </appContext.Provider>
  );
}

MyApp.getInitialProps = async (context) => {
  return {
      firebaseConfig: {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
      },
  };
};
