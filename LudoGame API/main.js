const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

// Middelware :: Programs :: Which runs in advance.
app.use(cors()); // unblocking cors policy
app.use(express.json()); // BODY :: RAW :: JSON
app.use(express.urlencoded({
    extended: true
})); // BODY :: URL ENCODED
const upload = multer(); // BODY :: FORM DATA

const dbadduser = require("./db.add.user");
const dbchangepass = require("./db.change.pass");
const dblogin = require("./db.login");
const dbCheckUser = require("./db.checkUser");
const dbcheckEmail = require("./db.checkEmail");



// POST API :: FOR TESTIG POSTMAN :: ANDROID :: IOS :: BROWSER
// http://localhost:3000/adduser
app.post("/adduser", async (req, res) => {
    try {
        const input = req.body; // before doing this

        await dbadduser.addData(input);
        res.json({
            opr: true
        });
    } catch (err) {
        res.json({
            opr: false
        });
    }
});

//Login Api call
// http://localhost:3000/login
app.post("/login", async (req, res) => {
    try {
        const input = req.body; // before doing this

        await dblogin.loginData(input);
        res.json({
            opr: true
        });
    } catch (err) {
        res.json({
            opr: false
        });
    }
});

//change password Api call
// http://localhost:3000/login
app.post("/changePass", async (req, res) => {
    try {
        const input = req.body; // before doing this

        await dbchangepass.changePass(input);
        res.json({
            message: "success"
        });
    } catch (err) {
        res.json({
            message: "fail"
        });
    }
});

//check user Api call
// http://localhost:3000/checkUser
app.post("/checkUser", async (req, res) => {
    try {
        const input = req.body; // before doing this

        await dbCheckUser.check(input);
        res.json({
            opr: true
        });
    } catch (err) {
        res.json({
            opr: false
        });
    }
});

// http://localhost:3000/checkEmail
app.post("/checkEmail", async (req, res) => {
    try {
        const input = req.body; // before doing this

        await dbcheckEmail.checkEmail(input);
        res.json({
            opr: true
        });
    } catch (err) {
        res.json({
            opr: false
        });
    }
});


// started  server.
app.listen(3000);