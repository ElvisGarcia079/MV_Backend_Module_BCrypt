const express = require("express");
const app = express();

const {User, Password} = require("./models/index");

const port = 3020;

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
    let PWs = await Password.findAll();
    res.send(PWs);
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});