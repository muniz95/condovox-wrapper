const { Condovox } = require("../dist");
require("../dist");
require('dotenv').config();

const {user, pass} = process.env
const condovox = new Condovox();

condovox.login(user, pass)
    .then(condovox.assembleias)
    .then(console.log)
// condovox.assembleias()
//     .then((assembleia) => {
//         console.log(assembleia.listAssembleias());
//     });