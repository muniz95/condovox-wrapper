const { Condovox } = require("../dist");
require('dotenv').config();

const {user, pass} = process.env
const condovox = new Condovox(user, pass);

var assembleias = condovox.login()
    .then(c => c.listAssembleias())

assembleias.then(console.log);