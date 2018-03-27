const condovox = require("../dist");
require('dotenv').config();

const {user, pass} = process.env
condovox.assembleias(user, pass).then(console.log);