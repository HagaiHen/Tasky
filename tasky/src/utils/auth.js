
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
      const response = await fetch('/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: idToken }),
      });
  
      if (response.ok) {
        // Handle successful login on the server
        return idToken;
      } else {
        // Handle unsuccessful login on the server
        console.error('Login failed!');
        return false;
      }
    } catch (error) {
      // Handle error
      console.error('Error during login:', error.message);
      return false;
    }
};
  

// helper function to submit auth form data to the server and get a user token back
// TODO: if the method is login - generate a token with firebase auth client sdk and send it to the server
//       the server will verify the token and return a ok response or an error
export async function submitAuthForm(formType, formData) {
    const res = await fetch(`http://localhost:5000/auth/${formType}`, {
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




// Defines an asynchronous function named postMessage 
// that sends a POST request to a specific path on a local server
export const postMessage = async (path, body) => {
  let data = false; // Variable to store the response data, initialized as false
  let payload = JSON.stringify(body); // Convert the request body to a JSON string
  console.log("postMessage - posting message - body = ", body);

  try {
    // Send a POST request to the specified path on the local server
      data = await fetch(`http://localhost:5000/api/${path}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: payload, // Include the JSON payload in the request body
    });
    // console.log("PostMessage Response: ", data.msg);
    if (data) {
      // If the response is received successfully (i.e., data is truthy)
      // Try parsing the response data as JSON
      return data.json().catch((err) => {
        console.log(
          `error in parsing json ${data.statusText}, error: ${err.message}`
        );
        return null; // Return null if parsing fails
      });
    }
  } catch (err) {
    // Catch any errors that occur during the fetch operation
    alert(`${err}, path:  ${path}, data ${data}`);
  }
};

// Defines an asynchronous function named 
// getMessage that sends a GET request to a specific path on a local server
export const getMessage = async (path) => {
  try {
    // Send a GET request to the specified path on the local server
    const data = await fetch(`http://localhost:5000/api/${path}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (data) {
      // If the response is received successfully (i.e., data is truthy)
      // Try parsing the response data as JSON
      return data.json().catch((err) => {
        console.log(`error in parsing json ${data}, error: ${err.message}`);
        return null; // Return null if parsing fails
      });
    }
  } catch (err) {
    // Catch any errors that occur during the fetch operation
    alert(`${data}, path: ${path}`);
  }
};
