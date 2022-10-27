const { User } = require("./User");
const { Password } = require("./Password");

User.hasOne(Password);
Password.belongsTo(User);

module.exports = {
    User,
    Password
}