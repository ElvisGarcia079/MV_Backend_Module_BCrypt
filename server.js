const express = require("express");
const app = express();
const { seed, salt} = require("./seed/seed");
const bcrypt = require("bcrypt");
const { passwords } = require("./seed/passwordData")

const {User, Password} = require("./models/index");

const port = 3020;

let password1 = "abc123";
let password2 = "123abc";
let password3 = "a1b2c3";

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.send("Successful GET Request Made to the Bcrypt server");
});

app.get("/users", async (req, res) => {
    let users = await User.findAll({include: Password});
    res.send(users);
});

app.get("/passwords", async (req, res) => {
    let PWs = await Password.findAll({include: User});
    res.send(PWs);
})

app.get("/users/:id/login", async (req, res) => {
   
    let user = await User.findAll(
        {
            where: {
                id: req.params.id
            }, 
            include: {
                model: Password
            }
        });
    let userPW = await user[0].password.password
    console.log("The password in DB: ", userPW);
    let hash = await bcrypt.hash(password1, salt);

    console.log("User Password Hash: ", hash);
    // console.log("hash);

    // The key here is, the salt. The salt used in this passwords hash is the same salt used in the DB passwords hash. So I sprinkled the same salt on both passwords and if they are the same then they will be equal. 
    let pwMatch = bcrypt.compareSync(password1, hash); // true

    pwMatch ? res.send("Success! You've entered the correct password") : res.send("Please enter the correct password to log in to your account!")
})

app.listen(port, () => {
    seed();
    console.log(`App listening on http://localhost:${port}`);
});