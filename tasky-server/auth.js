import express from "express";
import firebaseadmin from "./firebase-adminsdk.json" assert {type: "json"};
import admin from "firebase-admin"

admin.initializeApp({
    Credential: admin.credential.cert(firebaseadmin),
});
const auth = admin.auth();


const app = express();
app.use(express.json)
app.use(express.urlencoded({extended: false}));


app.post("/signup", async (req, res) => {
    console.log(req.body);
    const user = {
        email: req.body.email,
        password: req.body.password,
    }
    const userResponse = await auth.createUser({
        email: user.email,
        password: user.password,
        emailVerified: false,
        disabled: false,
    });
    res.json(userResponse);
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {

    console.log("Server is runing on port " + PORT);

});