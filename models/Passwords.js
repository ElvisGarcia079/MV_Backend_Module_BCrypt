const { Sequelize } = require("sequelize");
const { database } = require("../db");


const Passwords = demoDB.define("password", {
    //id
    id: {
        type: Sequelize.INTEGER, // INT
        autoIncrement: true, // AUTO_INCREMENT
        primaryKey: true // PRIMARY KEY
    },
    // first_name
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = {
    Passwords
}