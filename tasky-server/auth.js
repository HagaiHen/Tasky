import express from "express";
import serviceAccount from "./tasky-525d6-firebase-adminsdk-mw9jd-5d69b205c7.json" assert {type: "json"};
import admin from "firebase-admin";
import bodyParser from "body-parser";
import cors from "cors";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });


const app = express();
app.use(bodyParser.json());
app.use(cors());


// TODO: Add a route to handle the signup form submission
// the route should create a new user in Firebase Firestore
// then return a 201 status code with a token of the new user
app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log('new user try to signup: ' + email, password);
      const userRecord = await admin.auth().createUser({
        email,
        password,
      });
      console.log('new user created: ' + userRecord.uid);
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
});


// the client will authenticate with firebase client auth sdk and get a token
// the client will send the token to the server
// the server will verify the token with firebase admin sdk
// if the token is valid, the server will return some kind of ok response
// if the token is invalid, the server will return an error response
// the client will handle the response and redirect the user to the dashboard or show an error message 
app.post('/api/signin', async (req, res) => {
  try {
    const { token } = req.body;
    console.log('new user try to login: ' + token);
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log('new user logged in: ' + decodedToken.uid);
    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log("Server is runing on port " + PORT);

});