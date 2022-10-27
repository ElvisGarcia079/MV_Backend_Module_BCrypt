const bcrypt = require("bcrypt");

let nameStr = "Elvis Garcia";

let salt = bcrypt.genSaltSync(4);
let hash = bcrypt.hashSync(nameStr, salt);
console.log(hash);

