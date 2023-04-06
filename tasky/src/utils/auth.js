// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCcVj1J67q5uoSo1bSpMKZIgOxUvbQezb8",
  authDomain: "tasky-525d6.firebaseapp.com",
  projectId: "tasky-525d6",
  storageBucket: "tasky-525d6.appspot.com",
  messagingSenderId: "933733351523",
  appId: "1:933733351523:web:d5ce986d9b62466686b856"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Function to handle user login
const loginUser = async (email, password) => {
    try {
      // Sign in user with email and password
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
  
      // Get user token
      const idToken = await userCredential.user.getIdToken();
  
      // Send token to server with a POST request
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: idToken }),
      });
  
      if (response.ok) {
        // Handle successful login on the server
        console.log('Login successful!');
      } else {
        // Handle unsuccessful login on the server
        console.error('Login failed!');
      }
    } catch (error) {
      // Handle error
      console.error('Error during login:', error.message);
    }
};
  

// helper function to submit auth form data to the server and get a user token back
// TODO: if the method is login - generate a token with firebase auth client sdk and send it to the server
//       the server will verify the token and return a ok response or an error
export async function submitAuthForm(formType, formData) {
    const res = await fetch(`http://localhost:5000/api/${formType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log('res: ', res);
    const token = await res.json();
    return token;
  }

