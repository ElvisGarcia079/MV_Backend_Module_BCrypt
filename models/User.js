const { Sequelize } = require("sequelize");
const { database } = require("../db");


const User = database.define("user", {
    //id
    id: {
        type: Sequelize.INTEGER, // INT
        autoIncrement: true, // AUTO_INCREMENT
        primaryKey: true // PRIMARY KEY
    },
    // first_name
    first_name: {
        type: Sequelize.STRING, // VARCHAR(x)
        defaultValue: "John" // DEFAULT "John"
    },
    // last_name
    last_name: {
        type: Sequelize.STRING, // VARCHAR(x)
        defaultValue: "Doe" // DEFAULT "Doe"
    },
    // age
    email: {
        type: Sequelize.STRING, // INT
        allowNull: false // NOT NULL
    }
}, {
    timestamps: false
});

module.exports = {
    User
}