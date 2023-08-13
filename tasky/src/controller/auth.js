import { signInWithEmailAndPassword } from "firebase/auth";
import { URLS } from "@/utils/consts";
import { getAuth } from "firebase/auth";
import { signInWithCustomToken } from "firebase/auth";


/* Function to handle user signup, this is the first stage sign up, after it there is the signup session */
export const controllerSignUp = async (formData) => {
  const res = await fetch(URLS.SERVER + `/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  console.log(res);

  if (res.ok) {
    // start signup form session
    const data = await res.json();
    return { success: true, error: null, uid: data.uid, token: data.token };
  } else {
    // indicate error
    return { success: false, error: res.body.message };
  }
};

export const controllerSignUpSession = async (user, token, app) => {
  try {
    const res = await fetch(URLS.SERVER + `/user/updateUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      // sign the user in 
      const userCredential = await signInWithCustomToken(getAuth(app), token);
      if (userCredential.user.uid === user.uid) {
        return { success: true, error: null };
      }
    } else {
      // indicate error
      return { success: false, error: res.body.message };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/* signin function handle firebase client sdk logic for sign up + update the node server and wait for verification from him */
export const controllerSignIn = async (email, password, app) => {
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

export const controllerSignOut = async (app) => {
  try {
    await getAuth(app).signOut();
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
