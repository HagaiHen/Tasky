
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// TODO: save server url in a more mnner that can be changed easily
export const SERVERURL = process.env.SERVER;

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
