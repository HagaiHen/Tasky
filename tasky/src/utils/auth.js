
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCcVj1J67q5uoSo1bSpMKZIgOxUvbQezb8",
  authDomain: "tasky-525d6.firebaseapp.com",
  projectId: "tasky-525d6",
  storageBucket: "tasky-525d6.appspot.com",
  messagingSenderId: "933733351523",
  appId: "1:933733351523:web:d5ce986d9b62466686b856"
};

// TODO: save server url in a more mnner that can be changed easily
export const SERVERURL = 'http://localhost:5000';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to handle user login
export const signIn = async (email, password) => {
    try {
      // Sign in user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
      // Get user token
      const idToken = await userCredential.user.getIdToken();
  
      // Send token to server with a POST request
      const response = await fetch(SERVERURL + '/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: idToken }),
      });
  
      if (response.ok) {
        // Handle successful login on the server
        return { success: true , error: null, token: idToken, user: userCredential.user };
      } else {
        // Handle unsuccessful login on the server
        console.error('Login failed!');
        // return success false and error message from server response message
        return { success: false, error: 'Login failed! :' + response.params.message };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
};
  

// helper function to submit auth form data to the server and get a user token back
// TODO: if the method is login - generate a token with firebase auth client sdk and send it to the server
//       the server will verify the token and return a ok response or an error
export async function submitFirstSignup(formData) {
    const res = await fetch(SERVERURL + `/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
       // start signup form session
        return { success: true, error: null , token: res.body.uid };
    }

    else{
      // indicate error
      return { success: false, error: res.body.message };
    }
  }

