const { Sequelize } = require("sequelize");

const database = new Sequelize({
    dialect: "sqlite"
});