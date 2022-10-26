const { Users } = require("./Customers");
const { Passwords } = require("./Products");

Users.hasOne(Passwords);
Passwords.belongsTo(Users);

module.exports = {
    Users,
    Passwords
}