const { Sequelize } = require("sequelize");
const path = require("path");

const database = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname + "sqlite.db"),
    logging: false
});

module.exports = {
    database
}