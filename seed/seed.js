const {users} = require("./userData");
const {passwords} = require("./passwordData");
const { database } = require("../db")
const bcrypt = require("bcrypt");
;const { User, Password } = require("../models/index");

let seed = async () => {
    await database.sync({force:true});

    console.log("Beginning the process... \n\n");
    console.log("The users ", users);
    console.log("The passwords ", passwords)

    let userEntries = await User.bulkCreate(users);
    let passwordEntries = await Password.bulkCreate(passwords);

    let user1 = await userEntries[0];
    console.log("ADDED USER 1")
    let user2 = await userEntries[1];
    console.log("ADDED USER 2")
    let user3 = await userEntries[2];
    console.log("ADDED USER 3")
    let PW1 = await passwordEntries[0];
    console.log("ADDED PW 1")
    let PW2 = await passwordEntries[1];
    console.log("ADDED PW 2")
    let PW3 = await passwordEntries[2];
    console.log("ADDED PW 3")

    await user1.setPassword(PW1);
    console.log("User 1 has Password 1");
    await user2.setPassword(PW3);
    console.log("User 2 has Password 3");
    await user3.setPassword(PW2);
    console.log("User 3 has Password 2\n\n");

    console.log("Database successfully populated");

}

seed();

module.exports = {
    seed
}