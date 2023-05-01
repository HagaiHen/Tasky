import admin from "firebase-admin";
import express from "express";

export const authRouter = express.Router();


// TODO: Add a route to handle the signup form submission
// the route should create a new user in Firebase Firestore
// then return a 201 status code with a token of the new user
authRouter.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log('new user try to signup: ' + email, password);
      const userRecord = await admin.auth().createUser({
        email,
        password,
      });
      console.log('new user created: ' + userRecord.uid);
      // send user token to client
      res.status(201).json({ message: 'User created successfully' , uid: userRecord.uid});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong', error: error });
    }
});


// the client will authenticate with firebase client auth sdk and get a token
// the client will send the token to the server
// the server will verify the token with firebase admin sdk
// if the token is valid, the server will return some kind of ok response
// if the token is invalid, the server will return an error response
// the client will handle the response and redirect the user to the dashboard or show an error message 
authRouter.post('/signin', async (req, res) => {
  try {
    const { token } = req.body;
    console.log('new user try to login: ' + token);
    const decodedToken = await admin.auth().verifyIdToken(token);
    if (!decodedToken) {
      throw new Error('Invalid token');
    }
    console.log('new user logged in: ' + decodedToken.uid);
    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'tasky server: Invalid credentials.' + error });
  }
});