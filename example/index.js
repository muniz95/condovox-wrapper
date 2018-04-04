const { Condovox } = require("../dist");
require("../dist");
require('dotenv').config();

const {user, pass} = process.env
const condovox = new Condovox();

var assembleias = condovox.login(user, pass)
    .then(condovox.listAssembleias)

assembleias.then(console.log);