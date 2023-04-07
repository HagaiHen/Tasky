import express from "express";
import serviceAccount from "./tasky-525d6-firebase-adminsdk-mw9jd-5d69b205c7.json" assert {type: "json"};
import admin from "firebase-admin";
import bodyParser from "body-parser";
import cors from "cors";
import { authRouter }  from "./auth.js";
import { docsRouter } from "./docs.js";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

export const db = admin.firestore();
const app = express();
app.use(bodyParser.json());
app.use(cors());


// router inculdes all the http requests for all other files
app.use("/auth", authRouter);
app.use("/docs", docsRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

    console.log("Server is runing on port " + PORT);

});