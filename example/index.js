const condovox = require("../dist");
require('dotenv').config();

const {user, pass} = process.env
// condovox.assembleias(user, pass).then((assembleia) => {
//     console.log(assembleia.listAssembleias());
// });
condovox.assembleias(user, pass).then((response) => {
    console.log(response.body);
});