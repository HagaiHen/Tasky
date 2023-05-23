import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { URLS } from "@/utils/consts";
// helper function to submit auth form data to the server and get a user token back
// TODO: if the method is login - generate a token with firebase auth client sdk and send it to the server
//       the server will verify the token and return a ok response or an error
export const controllerSignUp = async (formData) => {
  const res = await fetch(URLS.SERVER + `/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    // start signup form session
    return { success: true, error: null, token: res.body.uid };
  } else {
    // indicate error
    return { success: false, error: res.body.message };
  }
};

// Function to handle user login
export const controllerSignIn = async (app, email, password) => {
  try {
    // Sign in user with email and password
    const userCredential = await signInWithEmailAndPassword(
      getAuth(app),
      email,
      password
    );

    // Get user token
    const idToken = await userCredential.user.getIdToken();

    // Send token to server with a POST request
    const response = await fetch(URLS.SERVER + "/auth/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: idToken }),
    });

    if (response.ok) {
      // Handle successful login on the server
      return {
        success: true,
        error: null,
        token: idToken,
        user: userCredential.user,
      };
    } else {
      // Handle unsuccessful login on the server
      console.error("Login failed!");
      // return success false and error message from server response message
      return {
        success: false,
        error: "Login failed! :" + response.params.message,
      };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};
