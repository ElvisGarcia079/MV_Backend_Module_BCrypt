const { Sequelize } = require("sequelize");
const path = require("path");

const database = new Sequelize({
    dialect: "sqlite"
});